import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddArticle.css';

 
function AddArticle({ setArticles }) {
  // State pour gérer le formulaire
  const [formulaire, setFormulaire] = useState({
    titre: "",
    categorie: "",
    auteur: "",
    date_publication: "",
    image: null,
    contenu: "",
  });

  // State pour gérer les erreurs
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate();

   // Fonction générique pour tous les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  //Fonction pour traiter le changement de l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // On récupère le fichier sélectionné

    if (file) {
      const reader = new FileReader(); // Crée un lecteur de fichier

      reader.onloadend = () => {
        // Quand le fichier est lu avec succès...
        setFormulaire((prev) => ({
          ...prev,
          image: reader.result, // On enregistre le contenu base64 dans le state
        }));
      };

      reader.readAsDataURL(file); // On demande de lire le fichier sous forme de base64
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis");
      // Vérification automatique : tous les champs doivent être remplis
    const champsVides = Object.entries(formulaire).filter(([, val]) => !val || (typeof val === "string" && val.trim() === ''));
    // Si des champs sont vides, on affiche une erreur);

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
      image: formulaire.image,
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
      image: null,
      contenu: "",
    });

    // Redirection vers la page d’accueil
    navigate("/");
  };

  return (
   <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h4> NOUVEL ARTICLE</h4>
        
        {/* Champs du formulaire */}
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            name="titre"
            value={formulaire.titre}
            onChange={handleChange}
            placeholder="Titre de l’article"
          />
        </div>

        <div className="form-group">
          <label>Catégorie</label>
          <input
            type="text"
            name="categorie"
            value={formulaire.categorie}
            onChange={handleChange}
            placeholder="Ex: React, Voyage, Cuisine"
          />
        </div>

        <div className="form-group">
          <label>Auteur</label>
          <input
            type="text"
            name="auteur"
            value={formulaire.auteur}
            onChange={handleChange}
            placeholder="Nom de l’auteur"
          />
        </div>

        <div className="form-group">
          <label>Date de publication</label>
          <input
            type="date"
            name="date_publication"
            value={formulaire.date_publication}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image illustrative</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label>Contenu</label>
          <textarea
            name="contenu"
            value={formulaire.contenu}
            onChange={handleChange}
            placeholder="
              Introduction générale du sujet.
              ## Sous-titre 1
              Explication détaillée de ce sous-titre.

              ## Sous-titre 2
              Autre contenu explicatif."
            rows={15}
          />
        </div>
        
        <button type="submit" className='form-group-button'>Ajouter</button>
      </form>
    </div>
  );
}

export default AddArticle;
