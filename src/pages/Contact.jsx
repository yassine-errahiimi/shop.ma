import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-primary">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
