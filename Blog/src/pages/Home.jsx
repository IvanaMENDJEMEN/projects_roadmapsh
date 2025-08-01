import ArticleItem from '../Components/ArticleItem';
import './Home.css';

function Home ({ articles }) {
  return (
    <div className="home">
      <div className="articles-card">
        <h2>Articles récents</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
      </div>
      
      <div className="about">
        <h3>À propos de moi</h3>
      </div>
    </div>
  );
}

export default Home;