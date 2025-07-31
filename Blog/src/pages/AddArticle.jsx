import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 
function AddArticle({ setArticles }) {
  const [formulaire, setFormulaire] = useState({
    titre: "",
    categorie: "",
    auteur: "",
    date_publication: "",
    contenu: "",
  });

  const navigate = useNavigate();

   // Fonction générique pour tous les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  const [erreur, setErreur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis");
      // Vérification automatique : tous les champs doivent être remplis
    const champsVides = Object.entries(formulaire).filter(([_, val]) => val.trim() === '');

    if (champsVides.length > 0) {
      setErreur("Veuillez remplir tous les champs du formulaire.");
      alert(erreur);
      console.error(erreur);
      return;
    }
    
    const nouvelArticle = {
      id: Date.now(), // identifiant unique
      titre: formulaire.titre,
      categorie: formulaire.categorie,  
      auteur: formulaire.auteur,
      date_publication: formulaire.date_publication || new Date().toISOString().split('T')[0], // date actuelle si non fournie
      contenu: formulaire.contenu,  
    };

    // Ajouter le nouvel article à la liste des articles
    // setArticles([...articles, nouvelArticle]);
    setArticles(prevArticles => [...prevArticles, nouvelArticle]);

    // Réinitialiser les champs
    setFormulaire({
      titre: "",
      categorie: "",
      auteur: "",
      date_publication: "",
      contenu: "",
    });

    // Redirection vers la page d’accueil
    navigate("/");
  };

  return (
    <div>
      <h2>Ajouter un nouvel article</h2>
      <form onSubmit={handleSubmit}>  
        <input
          type="text"
          name='titre'
          placeholder="Titre de l’article"
          value={formulaire.titre}
          onChange={(e) => handleChange(e)}
        />
        <br /><br />
        <input
          type="text"
          name='categorie'
          placeholder="Categorie de l’article"
          value={formulaire.categorie}
          onChange={(e) => handleChange(e)}
        />
        <br /><br />
        <input
          type="text"
          name='auteur'
          placeholder="Auteur de l’article"
          value={formulaire.auteur}
          onChange={(e) => handleChange(e)}
        />
        <br /><br />
        <input
          type="date"
          name='date_publication'
          placeholder="Date de publication"
          value={formulaire.date_publication}
          onChange={(e) => handleChange(e)}
        />
        <br /><br />
        <textarea
          name='contenu'
          placeholder="Contenu de l’article"
          value={formulaire.contenu}
          onChange={(e) => handleChange(e)}
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
