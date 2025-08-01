import { Link } from 'react-router-dom';
import './ArticleItem.css'; 

function ArticleItem({ article }) {
  return (
    <li className="article-card">
        <h3>{article.titre}</h3>
        <p><strong>Catégorie:</strong> {article.categorie}</p>
        <p><strong>Auteur:</strong> {article.auteur}</p>
        <p><strong>Date de publication:</strong> {new Date(article.date_publication).toLocaleDateString()}</p>
        <p>{article.contenu.slice(0, 60)}...</p>
        <Link to={`/article/${article.id}`}>Lire plus</Link>
    </li>
  );
}

export default ArticleItem;
