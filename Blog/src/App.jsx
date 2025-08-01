import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import AddArticle from './pages/AddArticle';
import articlesInitiaux from './data';
import { useEffect, useState } from 'react';

function App() {
  // State to hold articles
  const [articles, setArticles] = useState( () => {
    /*Verifie si il ya des articles dans le localStorage ; Si oui, les charge, sinon utilise les articlesInitiaux 
      Utilise une fonction de chargement pour éviter de charger les articles à chaque rendu
      Cela permet de ne pas charger les articlesInitiaux à chaque fois que le composant */
    const storedArticles = localStorage.getItem('articles');
    return storedArticles ? JSON.parse(storedArticles) || [] : articlesInitiaux;
  });

  useEffect(() => { 
    // Sauvegarder les articles dans le localStorage à chaque mise à jour
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  return (
    <div className="blog">
      <div className="sidenav">
        <nav className="navbar">
          <Link to="/">Accueil</Link>
          <Link to="/ajouter">Ajouter un article</Link>
        </nav>
      </div>
      <div className="container">
        <h1>Tech Blog</h1>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/ajouter" element={<AddArticle setArticles={setArticles} />} />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} /> 
        </Routes>
      </div>
      
    </div>
  )
}

export default App
