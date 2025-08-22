import Image from 'next/image';
import LinkItem from '../LinkItem'
import './Header.css';

export default function Header(){
    return (
        <header className="entete cadre" >
        <nav className="tabs">
            <Image 
                src="/MYSI Portfolio-logo-transparent.png" 
                alt="description-logo"
                width={200}
                height={200}
            /> 
            <div className="tabs-nav">
                <LinkItem href='/' label='Accueil'/>
                <LinkItem href='/projet' label='Projet'/>
                <LinkItem href='/contact' label='Contact'/>
            </div>

        </nav>
    </header>
    )
}
