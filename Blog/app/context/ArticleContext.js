// app/context/ArticleContext.tsx (ou .js)
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import articlesInitiaux from '../../components/data';

const ArticleContext = createContext(null);

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchdata = () => {
            const storedArticles = localStorage.getItem('articles') || [];
            if (storedArticles && storedArticles.length > 0){
                setArticles(JSON.parse(storedArticles)) 
            } else {
                setArticles(articlesInitiaux);
            }
                
        }
        fetchdata();
    }, [])
    
    useEffect(() => { 
        // Sauvegarder les articles dans le localStorage à chaque mise à jour
        localStorage.setItem('articles', JSON.stringify(articles));
      }, [articles]);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => useContext(ArticleContext);
