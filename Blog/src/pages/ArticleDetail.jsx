import { useParams } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams(); // extrait l'id depuis l'URL
  const article = articles.find((a) => a.id === Number(id)); // cherche l'article par ID

  if (!article) {
    return <p> Article introuvable</p>;
  }

  return (
    <div>
      <h2>{article.titre}</h2>
      <p><strong>Auteur :</strong> {article.auteur}</p>
      <p><strong>Contenu :</strong></p>
      <p>{article.contenu}</p>
      <p><em>Catégorie :</em> {article.categorie}</p>
    </div>
  );
}

export default ArticleDetail;
