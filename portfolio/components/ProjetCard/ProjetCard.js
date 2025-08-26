import React from "react";
import Image from "next/image";
import "../ProjetCard/ProjetCard.css";
import Link from "next/link";

function ProjectCard( {projet }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image src={projet.image} alt={projet.titre} width={400} height={250} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{projet.titre}</h3>
        <p className="project-description">{projet.description}</p>
        
          <Link
            href={ `/projet/${projet.id}`}
            rel="noopener noreferrer"
            className="project-link"
          >
            Voir le projet
          </Link>
        
      </div>
    </div>
  );
}

export default ProjectCard;
