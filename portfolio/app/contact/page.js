'use client';

import '../../styles/ContactPage.css';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function ContactPage() {
  const {register, handleSubmit,reset, formState: { errors }} = useForm();
  const [validatedMessage, setValidatedMessage] = useState('');

  const validatedRules = {
    name: { required: "Le nom est requis." },
    email: { 
      required: "L'email est requis.", 
      pattern: { 
        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 
        message: "Email invalide."
      } 
    },
    message: { required: "Le message est requis." },
  };
  const isMessageVisible = validatedMessage !== '';

  const onSubmit = async (data) => {
    setValidatedMessage('Envoi en cours...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setValidatedMessage("Formulaire envoyé avec succès !");
        reset();
        setTimeout(()=> {
          setValidatedMessage("");
        }, 3000)
        
      } else {
        setValidatedMessage(result.error || "Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error); 
      setValidatedMessage("Une erreur de réseau est survenue");
    }
    
  }
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
        <form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="name" placeholder="Nom" {...register('name', validatedRules.name)}/>
          {errors.name && <p className="error-message">{errors.name.message}</p>}

          <input type="email" name="email" placeholder="Email" {...register('email', validatedRules.email)} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}

          <textarea name="message" placeholder="Votre message..." rows="5" {...register('message', validatedRules.message)} />
         {errors.message && <p className="error-message">{errors.message.message}</p>}
          <button type="submit">Envoyer</button>

        </form>
        <div className={`status-message ${isMessageVisible ? '' : 'hidden'}`}>
          {validatedMessage && <p>{validatedMessage}</p>}
        </div>
        
        
      </div>
    </section>
  );
}

