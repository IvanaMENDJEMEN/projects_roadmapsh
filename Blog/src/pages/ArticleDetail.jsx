import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// A travailler demain jEUDI  
function AddArticle({ setArticles }) {
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titre.trim() === "" || contenu.trim() === "") {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const nouvelArticle = {
      id: Date.now(), // identifiant unique
      titre,
      contenu,
    };

    setArticles(prevArticles => [...prevArticles, nouvelArticle]);

    // Réinitialiser les champs
    setTitre("");
    setContenu("");

    // Redirection vers la page d’accueil
    navigate("/");
  };

  return (
    <div>
      <h2>Ajouter un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de l’article"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Contenu de l’article"
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          rows={6}
          cols={40}
        />
        <br /><br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddArticle;
