import React from "react";
import "../SectionExperience/SectionExperience.css"; // import du fichier CSS externe

function ExperienceSection() {
  return (
    <section className="experience-section cadre">
      <h2 className="section-experience-title">Mes Expériences</h2>

      <div className="timeline">

        {/* Expérience 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Stage en Développement Web</h3>
            <span className="date">Juillet 2025 - Aujourd’hui</span>
            <p>
              Développement d’applications web modernes et interactives,
              avec une mise en pratique des concepts front-end.
            </p>
          </div>
        </div>

        {/* Expérience 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Stage en Administration Système</h3>
            <span className="date">Fév 2024 - Octobre 2024</span>
            <p>
              Mise en place d’un processus automatisé de remontée d’informations
              à l’aide du Shell Bash et Ansible sur des systèmes Linux.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;
