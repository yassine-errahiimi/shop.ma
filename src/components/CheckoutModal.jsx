import React, { useState } from 'react';
import { FaMoneyBillWave, FaCreditCard, FaTimes } from 'react-icons/fa';

function CheckoutModal({ product, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'online'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Commande confirmée pour ${product.title}!\nMode de paiement: ${paymentMethod === 'cod' ? 'Paiement à la livraison' : 'Paiement en ligne'}\nTotal: ${product.price} MAD`);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2>Finaliser la commande</h2>
        
        <div className="order-summary">
          <div className="summary-row">
            <span>Produit:</span>
            <span>{product.title}</span>
          </div>
          <div className="summary-row total">
            <span>Total à payer:</span>
            <span>{product.price} MAD</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h3>Vos Coordonnées</h3>
            <div className="form-group">
              <label>Nom complet</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Ahmed Benali"
              />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: 06 12 34 56 78"
              />
            </div>
            <div className="form-group">
              <label>Ville</label>
              <input 
                type="text" 
                name="city" 
                required 
                value={formData.city}
                onChange={handleChange}
                placeholder="Ex: Casablanca"
              />
            </div>
            <div className="form-group">
              <label>Adresse de livraison</label>
              <textarea 
                name="address" 
                required 
                value={formData.address}
                onChange={handleChange}
                placeholder="Adresse détaillée..."
                rows="2"
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Mode de Paiement</h3>
            <div className="payment-options">
              <div 
                className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <FaMoneyBillWave className="option-icon" />
                <span>Paiement à la livraison</span>
              </div>
              <div 
                className={`payment-option ${paymentMethod === 'online' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('online')}
              >
                <FaCreditCard className="option-icon" />
                <span>Paiement par Carte</span>
              </div>
            </div>

            {paymentMethod === 'online' && (
              <div className="online-payment-info">
                <p>Vous serez redirigé vers notre plateforme de paiement sécurisée CMI après confirmation.</p>
              </div>
            )}
          </div>

          <button type="submit" className="btn-primary btn-block">
            Confirmer la commande ({product.price} MAD)
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;