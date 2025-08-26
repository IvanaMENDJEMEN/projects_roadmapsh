'use client';

import '../../styles/ContactPage.css';
import Link from 'next/link';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className='contactSection'>
      <div className='intro'>
        <h2>Me contacter</h2>
        <p>Une idée, une collaboration, une question ? Je suis disponible pour échanger.</p>
      </div>

      <div className='contactGrid'>
        {/* Infos à gauche */}
        <div className='contactInfo'>
          <div className='details'>
            <p><FaEnvelope className='icon-contact' /> soniayoumbi03@gmail.com</p>
            <p><FaMapMarkerAlt className='icon-contact' /> Douala, Cameroun</p>
            <p><FaPhoneAlt className='icon-contact' /> +237 658 082 894</p>
          </div>

          <div className='socials'>
            <Link href="https://wa.me/237658082894" target="_blank"><FaWhatsapp /></Link>
            <Link href="https://www.linkedin.com/in/ivana-mendjemen-573b3a29b/" target="_blank"><FaLinkedin /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
          </div>
        </div>
        {/* Formulaire à droite */}
        <form
          className='contactForm'
          action="https://formspree.io/f/yourFormID" // remplace par ton ID Formspree
          method="POST"
        >
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Votre message..." rows="5" required />
          <button type="submit">Envoyer</button>
        </form>

        
      </div>
    </section>
  );
}

