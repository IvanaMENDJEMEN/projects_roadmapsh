import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const projets = await prisma.projet.findMany();

        // Désérialisation des chaînes JSON
        const formattedProjets = projets.map(projet => ({
            ...projet,
            fonctionnalites: JSON.parse(projet.fonctionnalites),
            galerie: JSON.parse(projet.galerie),
            technologies: JSON.parse(projet.technologies),
            }));
    return NextResponse.json(formattedProjets, { status: 200 });

    }catch(error) {
        console.error(error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

export async function POST(request) {

    try {
        const body = await request.json();
        const { titre,sousTitre, fonctionnalites, galerie, demo, description, technologies, image, linkGithub } = body;

        if (!titre || !technologies || !description || !image || !galerie) {
            return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
        }

        await prisma.projet.create({
            data:{
                titre,
                sousTitre,
                fonctionnalites: JSON.stringify(fonctionnalites),
                galerie: JSON.stringify(galerie),
                demo,
                description,
                technologies: JSON.stringify(technologies),
                image,
                linkGithub
            }
        });
        return NextResponse.json({ success: true }, { status: 201 });

    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}