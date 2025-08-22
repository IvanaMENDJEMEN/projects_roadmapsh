import { FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer cadre">
        <div className="footer-content">
            <div className="footer-section">
                <div className="footer-title">
                    <h4>Contact</h4>
                </div>
            <div className="contact-icons">
                <p><FaEnvelope className="icon" /> soniayoumbi03@gmail.com</p>
                <p><FaMapMarkerAlt className="icon" /> Douala, Cameroun</p>
            </div>
            </div>

            <div className="social-links-row">
                <a href="https://wa.me/237658082894?text=Bonjour%2C%20je%20vous%20contacte%20suite%20%C3%A0%20votre%20profil.%20J'aimerais%20avoir%20plus%20d'informations%2C%20merci." target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/ivana-mendjemen-573b3a29b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MYSI Portfolio. Tous droits réservés.</p>
        </div>
    </footer>

  );
}

export default Footer;
