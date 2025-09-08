import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validation simple
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    // Sauvegarde dans SQLite
    await prisma.message.create({
      data: { name, email, message },
    });

    // Envoi d'email (ici avec Gmail comme exemple)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,  // défini dans .env.local
        pass: process.env.MAIL_PASS,  // mot de passe appli Gmail
      },
    });

    // Email à l'administrateur (à toi-même)
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_TO,  // ton email destinataire
      subject: "Nouveau message du formulaire",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    // Email de confirmation à l'utilisateur
    await transporter.sendMail({
        from: `'Support'<${process.env.MAIL_USER}>`,
        to: email,
        subject: "Confirmation de réception",
        text: `Bonjour ${name},\n\nMerci pour votre message. Nous vous répondrons dans les plus brefs délais.\n\nCordialement,\nL'équipe de support`,
    });

    return NextResponse.json({ success: true, message: "Message envoyé et sauvegardé !" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
