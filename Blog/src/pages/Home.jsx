import ArticleItem from '../Components/ArticleItem';

function Home ({ articles }) {
  return (
    <div>
      <h2>Articles récents</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}

export default Home;