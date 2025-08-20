import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import Footer from "../components/Footer/Footer"
import { ArticleProvider } from './context/ArticleContext'
import '../styles/App.css';

export const metadata = {
  title: 'Tech Blog',
  description: 'Blog pour nouveles technologies',
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ArticleProvider>
                    <header className="entete">
                        <div className="logo-titre">
                            <img src="/images/logo_blog.jpg" alt="Logo" />
                            <h1 className='blog-title'> Tech Blog </h1>
                        </div>
                        <nav className="navbar">
                            <Link href="/" className="nav-link">Accueil</Link>
                            <Link href="/ajouter" className="nav-link" >Ajouter un article</Link>
                            <div className="search-box">
                                <input type="text" placeholder="Rechercher un article..." />
                                <FaSearch className="search-icon" />
                            </div>
                        </nav>
        
                    </header>
                    <div id="root">{children}</div>
                    <Footer />
                </ArticleProvider>
            </body>
        </html>
    )
}