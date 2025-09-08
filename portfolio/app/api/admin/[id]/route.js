import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";


const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    const id = parseInt(params.id)

    try {
        const body = await request.json();
        const { titre,sousTitre, fonctionnalites, galerie, demo, description, technologies, image, linkGithub } = body;

        const updatedProject = await prisma.projet.update({
            where: { id },
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
        return NextResponse.json({ success: true, updatedProject: updatedProject }, { status: 200 });
    } catch (error) {
        console.error('Erreur PUT',error);
        return NextResponse.json({ error: "Erreur lors de la mise  a jour du projet " }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const id = parseInt(params.id)

    try {
        const deletedProject = await prisma.projet.delete({
            where: { id },
        });
        return NextResponse.json({ success: true, deletedProject: deletedProject }, { status: 200 });

    }catch (error) {
        console.error(error);
        return NextResponse.json({error: "Erreur lors de la suppression du projet " }, { status: 500 });
    }

}
