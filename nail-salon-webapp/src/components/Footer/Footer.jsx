import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h3>Stacy's Nails & Spa</h3>
        <p>26 Union St, Lynn, MA 01902, US</p>
        <p>Hours:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>Mon – Sat: 9:00 am – 7:00 pm</li>
          <li>Sun: 10:00 am – 5:00 pm</li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Stacy's Nails & Spa. All rights reserved.</p>
      </div>
      <div className="footer-map">
        <iframe
          title="Stacy's Nails & Spa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.073073073073!2d-70.9431236845437!3d42.46443097917909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s26%20Union%20St%2C%20Lynn%2C%20MA%2001902%2C%20USA!5e0!3m2!1sen!2sus!4v1662929292929!5m2!1sen!2sus"
          width="300"
          height="150"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
