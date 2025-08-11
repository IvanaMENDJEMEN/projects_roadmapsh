import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ArticleDetail.css';
import ArticleContent from '../Components/ArticleContent';    

function ArticleDetail({ articles }) {
  const { id } = useParams(); // extrait l'id depuis l'URL
  const article = articles.find((a) => a.id === Number(id)); // cherche l'article par ID

  if (!article) {
    return <p> Article introuvable</p>;
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
      <button type='texte' className='bouton-retour'> <Link to="/">Accueil</Link> </button>
    </div>
  );
}

export default ArticleDetail;
