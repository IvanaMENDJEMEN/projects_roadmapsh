'use client'
import { useParams } from 'next/navigation';
import ArticleDetail from '../../../components/ArticleItem/detailsArticle';
import { useArticles } from '../../context/ArticleContext';

function ArticleDetailsPage() {
  const { articles } = useArticles();
  const params = useParams()
  const id = params.id;
  console.log('Liste Articles',articles)
  const article = articles.find((a) => a.id === Number(id)); // cherche l'article par ID
  console.log('Article',article)

  if (!article) {
    return <p> Article introuvable</p>;
  }

  return (
    <ArticleDetail  id={id} article={article} />
  );
}

export default ArticleDetailsPage;
