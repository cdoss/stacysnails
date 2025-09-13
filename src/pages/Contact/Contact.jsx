
import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact-container">
  <h2>Contact Us</h2>
  <p className="contact-blurb">We love meeting new faces and welcoming back our regulars! Whether you have a question, want to book an appointment, or just want to say hello, feel free to reach out or stop by. Your comfort and satisfaction are our top priorities!</p>
        <div>
          <h3>Stacy's Nails & Spa</h3>
          <p>26 Union St, Lynn, MA 01902, US</p>
          <p className="contact-phone">
            <a href="tel:7815925192">(781) 592-5192</a>
          </p>
        </div>
        <div className="contact-hours">
          <h4>Hours</h4>
          <p>Mon-Sat: 9:00 am – 7:00 pm</p>
          <p>Sun: 10:00 am – 5:00 pm</p>
        </div>
        <div className="contact-social">
          <h4 className="contact-social-title">Social Media</h4>
          <ul>
            <li><a href="https://www.facebook.com/search/top?q=stacy's%20nails%20%26%20spa" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="social-icon" /> </a></li>
            <li><a href="https://www.instagram.com/explore/locations/1022829642/stacys-nails-spa/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="social-icon" /> </a></li>
            <li><a href="https://www.yelp.com/biz/stacys-nails-and-spa-lynn" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yelp.svg" alt="Yelp" className="social-icon" /> </a></li>
            <li><a href="https://www.google.com/maps/place/Stacy's+Nails+%26+Spa/@42.464, -70.949,17z/data=!3m1!4b1!4m7!3m6!1s0x89e370e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!8m2!3d42.464!4d-70.949!16s%2Fg%2F11c2e2e2e2e" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="Google" className="social-icon" /> </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;