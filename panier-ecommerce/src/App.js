import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css"; // Import du fichier CSS externe

// Liste des produits disponibles dans notre boutique
const PRODUCTS = [
  { id: 1, name: "T-shirt", price: 5000 },
  { id: 2, name: "Pantalon", price: 15000 },
  { id: 3, name: "Chaussures", price: 30000 },
  { id: 4, name: "Perruques", price: 60000 },
  { id: 5, name: "Bracelets", price: 3000 },
  { id: 6, name: "Pull-Over", price: 10000 }
];

// Formatage des prix en Franc CFA
const money = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF" });

export default function PanierEcommerce() {
  // État du panier (un tableau contenant les articles ajoutés)
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    return savedCart 
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id); // Vérifie si l'article existe déjà dans le panier
      if (found) {
        // Si l'article existe, on augmente sa quantité
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Sinon, on l'ajoute avec une quantité initiale de 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Fonction pour mettre à jour la quantité d'un article
  const updateQuantity = (id, nextQty) => {
    // On empêche que la quantité soit inférieure à 1
    const q = Math.max(1, parseInt(nextQty || "1", 10));
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  // Calcul du total général du panier
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1> <FaShoppingCart /> Panier e-commerce</h1>
          <div>
            Articles: <span>{cart.reduce((n, i) => n + i.quantity, 0)}</span>
          </div>
        </header>

        {/* Produits */}
        <section>
          <h2>Produits</h2>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="product-card">
                <div className="product-name">{p.name}</div>
                <div className="product-price">{money.format(p.price)}</div>
                <button className="btn" onClick={() => addToCart(p)}>
                  Ajouter au panier
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Panier */}
        <section>
          <h2>Mon panier</h2>

          {cart.length === 0 ? (
            <p className="empty">Votre panier est vide.</p>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{money.format(item.price)}</td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                          className="input-qty"
                        />
                      </td>
                      <td>{money.format(item.price * item.quantity)}</td>
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="total">
            Total général : {money.format(total)}
          </div>
        </section>
      </div>
    </div>
  );
}
