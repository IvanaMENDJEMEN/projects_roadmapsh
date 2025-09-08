import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request) {
    try {
        const formData = await request.formData();
        const files = formData.getAll('files'); 

        if (!files || files.length === 0) {
            return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 });
        }

        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await fs.mkdir(uploadsDir, { recursive: true }); 

        const urls = [];
        for (const file of files) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const uniqueFileName = `${Date.now()}_${file.name}`;
            await fs.writeFile(path.join(uploadsDir, uniqueFileName), buffer);
            urls.push(`/uploads/${uniqueFileName}`);
        }

        return NextResponse.json({ urls }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}