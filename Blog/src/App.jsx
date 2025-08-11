import './App.css'
import { Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import AddArticle from './pages/AddArticle';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


function App() {
  // State to hold articles
  const [articles, setArticles] = useState( () => {
    /*Verifie si il ya des articles dans le localStorage ; Si oui, les charge, sinon utilise les articlesInitiaux 
      Utilise une fonction de chargement pour éviter de charger les articles à chaque rendu
      Cela permet de ne pas charger les articlesInitiaux à chaque fois que le composant */
    const storedArticles = localStorage.getItem('articles');
    return storedArticles ? JSON.parse(storedArticles) : [];
  });

  useEffect(() => { 
    // Sauvegarder les articles dans le localStorage à chaque mise à jour
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  return (
    <div className="blog">
      <header className="entete">
        <div className="logo-titre">
          <img src="/images/logo_blog.jpg" alt="Logo" />
          <h1 className='blog-title'> Tech Blog </h1>
        </div>
        <nav className="navbar">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/ajouter" className="nav-link" >Ajouter un article</NavLink>
          <div className="search-box">
            <input type="text" placeholder="Rechercher un article..." />
            <FaSearch className="search-icon" />
          </div>
        </nav>
       
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/ajouter" element={<AddArticle setArticles={setArticles} />} />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
