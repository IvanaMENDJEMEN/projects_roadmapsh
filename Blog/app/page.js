"use client"
import ArticleItem from '../components/ArticleItem/ArticleItem';
import { useArticles } from '../app/context/ArticleContext';
import '../styles/Home.css';

function Home () {
    const { articles } = useArticles();
  return (
    <div className="home">
      <div className="articles-card">
        <h2>Articles récents</h2>
      <ul>
        {Array.isArray(articles) && articles.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
      </div>
      
      <div className="about">
        <h3>À propos </h3>
        <p>
          Bienvenue sur ce blog dédié aux nouvelles technologies, au développement web et à l’innovation informatique. 
          Ici, je partage des articles, des tutoriels et des réflexions pour aider les passionnés et les professionnels à approfondir leurs connaissances 
          et rester à jour dans un domaine en constante évolution
        </p>
        
      </div>
    </div>
  );
}

export default Home;