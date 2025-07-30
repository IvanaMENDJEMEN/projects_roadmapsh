import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle';
import ArticleDetail from './pages/ArticleDetail';
import articlesInitiaux from './data';
import { useState } from 'react';

function App() {
  // State to hold articles
  const [articles, setArticles] = useState(articlesInitiaux);

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Accueil</Link>
        <Link to="/ajouter">Ajouter un article</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/ajouter" element={<AddArticle />} />
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </div>
  )
}

export default App
