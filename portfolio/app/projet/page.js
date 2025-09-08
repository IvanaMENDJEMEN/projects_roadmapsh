
import ProjetCard from "../../components/ProjetCard/ProjetCard";
import "../../styles/ProjetPage.css";

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
export default async function ProjetPage() {
  const projets = await getProjets();
  console.log('projets recuperes',projets);
  if (projets.length === 0) {
    return <p className="no-projects-message">Aucun projet trouvé.</p>;
  }
    
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