import React from "react";
import Image from "next/image";
import "../ProjetCard/ProjetCard.css";
import Link from "next/link";

function ProjectCard( {projet }) {
  return (
    <div className="project-card">
      <div className="project-image-card">
        <Image 
          src={projet.image} 
          alt={projet.titre} 
          fill
        />
      </div>
      <div className="project-content-card">
        <h3 className="project-title-card">{projet.titre}</h3>
        <p className="project-description-card">{projet.description}</p>
        
          <Link
            href={ `/projet/${projet.id}`}
            rel="noopener noreferrer"
            className="project-link-card"
          >
            Voir le projet
          </Link>
        
      </div>
    </div>
  );
}

export default ProjectCard;
