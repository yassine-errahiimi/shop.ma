import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shop.ma</h3>
          <p>Votre destination shopping préférée au Maroc. Qualité, authenticité et service client exceptionnel.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/products">Produits</Link></li>
            <li><Link to="/cart">Panier</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Conditions Générales</Link></li>
            <li><Link to="/privacy">Confidentialité</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Paiement Sécurisé</h3>
          <p>Nous acceptons les moyens de paiement suivants :</p>
          <div className="payment-icons">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcPaypal className="payment-icon" />
            <span className="payment-text">Cash on Delivery</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Shop.ma - Tous droits réservés. Développé avec yassine errahimi au Maroc.</p>
      </div>
    </footer>
  );
}

export default Footer;
