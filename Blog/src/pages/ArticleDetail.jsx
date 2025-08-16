import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticleDetail.css';
import ArticleContent from '../Components/ArticleContent';    
import Commentaire from '../Components/Commentaire';


function ArticleDetail({ articles }) {
  const { id } = useParams(); // extrait l'id depuis l'URL
  const article = articles.find((a) => a.id === Number(id)); // cherche l'article par ID
  const [pseudo, setPseudo] = useState('');
  const [texte, setTexte] = useState('');
  const [commentaires, setCommentaires] = useState(() => {
    // Récupérer les messages du localStorage ou initialiser avec un tableau vide
    const savedCommentaires = localStorage.getItem('commentaires');
    return savedCommentaires ? JSON.parse(savedCommentaires) : [];
  });
  
  // Mettre à jour le localStorage chaque fois que les messages changent
  useEffect(() => {
    localStorage.setItem('commentaires', JSON.stringify(commentaires));
  }, [commentaires]);

  if (!article) {
    return <p> Article introuvable</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudo.trim() ==='' && texte.trim() ==='') return;

    const now = new Date();
    const date = now.toLocaleDateString("fr-FR");

    const inputCommentaire = {
      id: Date.now(), 
      key:id,
      pseudo:pseudo.trim(),
      texte:texte.trim(),
      date:date
    };
    
    setCommentaires([...commentaires, inputCommentaire]);
    setPseudo('');
    setTexte('');
  }
  return (
    <div className="article-detail">
      <div className="article-banner">
        <img src={article.image} alt="bannière" />
        <h1 className="article-title">{article.titre}</h1>
      </div>

      <div className="article-meta-detail">
        <span><strong>Auteur :</strong> {article.auteur}</span>
        <span><strong>Publié le :</strong> {new Date(article.date_publication).toLocaleDateString()}</span>
        <span><strong>Catégorie :</strong> {article.categorie}</span>
      </div>

      <div className="article-content">
        <ArticleContent contenu={article.contenu} />
      </div>
      <div className='article-commentaire'>
        <h3>Commentaires</h3>
        {/* On ne doit rien afficher lorsque la liste de commentaire est vide */}
        {commentaires.filter(msg => msg.key === id).length > 0 ? ( 
          <div className="box-commentaire">
            {commentaires
              .filter(msg => msg.key === id)
              .map((msg,index) => {
                const showDate = index === 0 || commentaires[index - 1].date !== msg.date;
                return (
                  <React.Fragment key={index}>
                    {showDate && <div className="date-separator">{msg.date}</div>}
                    <Commentaire 
                      key={msg.id}
                      pseudo={msg.pseudo} 
                      texte={msg.texte}
                    />
                  </React.Fragment>
                );
              }
            )} 
          </div>
        ):null}
        
        <form className='commentaire-form' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Pseudo" 
            value={pseudo} 
            onChange={(e) => setPseudo(e.target.value)} // Met à jour l'état à chaque frappe
          />
          <textarea 
            placeholder="Commentaire"
            value={texte} 
            onChange={(e) => setTexte(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(); // Envoi si on appuie sur Entrée
              }
            }}  
          />
          <button type="submit" >Ajouter</button>
        </form>
      </div>
      <button type='texte' className='bouton-retour'> <Link to="/">Accueil</Link> </button>
    </div>
  );
}

export default ArticleDetail;
