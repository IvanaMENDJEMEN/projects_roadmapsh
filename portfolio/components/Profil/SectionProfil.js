import Image from "next/image";
import '../Profil/SectionProfil.css'
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import LinkItem from '../../components/LinkItem'

export default function SectionProfil(){
    return (
        <section className="section-profil cadre">
            <div className="section-profil-description">
                <h3>Bonjour, je suis </h3>
                <h1>Sonia Ivana <br/>MENDJEMEN YOUMBI</h1>
                <p>Ingenieur Logiciel - Developpeuse Web</p>
                <button><LinkItem href='/contact' label='Me contacter'/></button>
            </div>
            <div className="section-profil-photo">
                <Image
                    src="/portrait-profil.png"
                    width={500}
                    height={500}
                    alt="Photo Identite"
                />
            </div>
            <div className="section-profil-social-links">
                
                <a href="https://wa.me/237658082894?text=Bonjour%2C%20je%20vous%20contacte%20suite%20%C3%A0%20votre%20profil.%20J'aimerais%20avoir%20plus%20d'informations%2C%20merci." target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/ivana-mendjemen-573b3a29b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </section>
    )
}