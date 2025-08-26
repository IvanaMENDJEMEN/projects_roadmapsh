'use client'

import { useEffect, useState } from "react";
import ProjetCard from "../../components/ProjetCard/ProjetCard";
import projetsInitiaux  from "../../components/data";
import "../../styles/ProjetPage.css";

export default function ProjetPage() {
    const [projets, setProjets] = useState(projetsInitiaux);

    useEffect(() => {
        localStorage.setItem('projets', JSON.stringify(projets));
    }, [projets]);
    
  return (
    <section className="projects-page">
      <h2 className="section-title">Mes Projets</h2>
      <p className="section-intro">
        Découvrez mes réalisations récentes en développement web et systèmes.
      </p>

      <div className="projects-grid">
        {projets.map((proj) => (
          <ProjetCard key={proj.id} projet={proj} />
        ))}
      </div>
    </section>
  );
}