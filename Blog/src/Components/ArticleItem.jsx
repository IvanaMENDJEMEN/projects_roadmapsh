import { Link } from 'react-router-dom';
import './ArticleItem.css'; 


function ArticleItem({ article }) {
  return (
    <li className="article-card">
      <div className="article-image">
        <img src={article.image} alt="Illustration" />
      </div>
      
      <div className="article-content">
        <h3>{article.titre}</h3>
        
        <div className="article-meta">
          <span>{article.categorie}</span>
          <span>; {article.auteur}</span>
          <span>, {new Date(article.date_publication).toLocaleDateString()}</span>
        </div>

        <p className="article-extrait">{article.contenu.slice(0, 300)}...</p>

        <Link to={`/article/${article.id}`} className="read-more">Lire plus</Link>
      </div>
    </li>
  );
}

export default ArticleItem;
