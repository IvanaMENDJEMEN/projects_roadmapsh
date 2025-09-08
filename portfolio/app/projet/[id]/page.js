
import Image from "next/image";
import '../../../styles/ProjetDetailPage.css'
import BackButton from "../../../components/BackButton/BackButton";


async function getProjets() {
  try {
    const response = await fetch('http://localhost:3000/api/admin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store' // Pour s'assurer d'obtenir les données les plus récentes
    })
  
    if (!response.ok) {
      throw new Error(`Erreur de l'API: ${response.statusText}`);
    }
    return response.json();

  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    return [];
  }

}
export default async function ProjetDetail({params}) {
    const projets = await getProjets();
    const projet = projets.find((p) => p.id === Number(params.id));
    
    if (!projet) {
        return <h2>Projet introuvable </h2>;
    }

    return (
        <div className="project-detail">
            <section className="project-header">
                <h1 className="project-title">{projet.titre}</h1>
                <p className="project-subtitle">{projet.sousTitre}</p>
                
                    <div className="project-image">
                    <Image 
                        src={projet.image}    
                        alt={projet.titre}
                        width={700} 
                        height={500}
                    />
                    </div>
                
            </section>
            <section className="project-section">
                <h2>Description</h2>
                <p>{projet.description}</p>
            </section>
            <section className="project-section">
                <h2>Technologies utilisées</h2>
                <div className="tech-list">
                    {projet.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                        {tech}
                    </span>
                    ))}
                </div>
            </section>
            <section className="project-section">
                <h2>Fonctionnalités principales</h2>
                <ul>
                    {projet.fonctionnalites.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
            <section className="project-section">
                <h2>Défis rencontrés & solutions</h2>
                <p>{projet.challenges}</p>
            </section>
            <section className="project-section">
                <h2>Galerie</h2>
                <div className="gallery">
                    {projet.galerie.map((imgSrc, index) => (
                    <div key={index} className="gallery-item">
                        <Image 
                            src={imgSrc}    
                            alt={`${projet.titre} screenshot ${index + 1}`}
                            width={300} 
                            height={200}
                        />
                    </div>
                    ))}
                </div>
            </section>
            <section className="project-links">
                {projet.demo && (
                    <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="btn">
                    Voir en ligne
                    </a>
                )}
                {projet.linkGithub && (
                    <a href={projet.linkGithub} target="_blank" rel="noopener noreferrer" className="btn secondary">
                    Code source
                    </a>
                )}
            </section>
            
        <br />
        <BackButton />
        </div>
    );
}
