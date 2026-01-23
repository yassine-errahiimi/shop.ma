import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <h1>Votre Boutique Marocaine en Ligne</h1>
        <p className="hero-subtitle">
          Découvrez une expérience de shopping unique. Des produits authentiques, 
          une livraison rapide et un service client à votre écoute.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">Commencer vos achats</Link>
          <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
        </div>
      </div>

      
      <section className="features-section">
        <div className="section-header">
          <h2>Pourquoi choisir Shop.ma ?</h2>
          <p>Tout ce dont vous avez besoin pour une expérience d'achat parfaite.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Livraison Rapide</h3>
            <p>Expédition sous 24h partout au Maroc.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Paiement Sécurisé</h3>
            <p>Transactions 100% sécurisées et paiement à la livraison.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Qualité Premium</h3>
            <p>Des produits sélectionnés avec soin pour vous.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Support 24/7</h3>
            <p>Une équipe dédiée pour répondre à vos questions.</p>
          </div>
        </div>
      </section>

      
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">+10k</span>
          <span className="stat-label">Clients Satisfaits</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">+500</span>
          <span className="stat-label">Produits Uniques</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24h</span>
          <span className="stat-label">Livraison Moyenne</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4.9/5</span>
          <span className="stat-label">Note Moyenne</span>
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section">
        <div className="section-header">
          <h2>Comment ça marche ?</h2>
          <p>Commander n'a jamais été aussi simple.</p>
        </div>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3>Choisissez</h3>
            <p>Parcourez notre catalogue et sélectionnez vos produits.</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h3>Commandez</h3>
            <p>Validez votre panier en quelques clics.</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h3>Recevez</h3>
            <p>Livraison rapide directement chez vous.</p>
          </div>
        </div>
      </section>

     
      <section className="faq-section">
        <div className="section-header">
          <h2>Questions Fréquentes</h2>
          <p>Nous avons les réponses à vos questions.</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Livrez-vous partout au Maroc ?</h3>
            <p>Oui, nous assurons la livraison dans toutes les villes du Royaume via nos partenaires logistiques.</p>
          </div>
          <div className="faq-item">
            <h3>Quels sont les moyens de paiement ?</h3>
            <p>Vous pouvez payer par carte bancaire ou choisir le paiement à la livraison pour plus de flexibilité.</p>
          </div>
          <div className="faq-item">
            <h3>Puis-je retourner un produit ?</h3>
            <p>Absolument. Vous disposez de 7 jours pour retourner tout produit qui ne vous convient pas.</p>
          </div>
          <div className="faq-item">
            <h3>Les produits sont-ils originaux ?</h3>
            <p>Nous garantissons l'authenticité de tous nos produits, provenant directement de fournisseurs certifiés.</p>
          </div>
        </div>
      </section>

      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à commander ?</h2>
          <p>
            Rejoignez des milliers de clients satisfaits et profitez de nos offres exclusives dès aujourd'hui.
          </p>
          <Link to="/products" className="btn btn-secondary">Voir le catalogue</Link>
        </div>
        <div className="cta-image">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800" 
            alt="Shopping Shop.ma" 
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
