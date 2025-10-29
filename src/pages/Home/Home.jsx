
import { useEffect } from "react";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        document.title = "Stacy's Nails & Spa";
    }, []);
    return (
        <div className="page-container home-container">
            <h1>Welcome to Stacy's Nails & Spa</h1>
            <p className="home-blurb">
                Relax, refresh, and treat yourself to the best nail care and waxing services in Lynn! Our friendly, licensed technicians are here to make you feel pampered and beautiful in a clean, welcoming environment.
            </p>
            <div className="home-highlights">
                <div className="highlight">
                    <h2>Expert Nail Care</h2>
                    <p>Manicures, pedicures, gel, dip powder, acrylics, and custom nail art.</p>
                </div>
                <div className="highlight">
                    <h2>Waxing Services</h2>
                    <p>Professional waxing for brows, lips, face, arms, legs, and more.</p>
                </div>
                <div className="highlight">
                    <h2>Walk-Ins Welcome</h2>
                    <p>No appointment needed—just stop by and we'll take care of you!</p>
                </div>
            </div>
            <div className="home-cta">
                <a href="https://book.squareup.com/appointments/sq04w0tynx19e7/location/L7W1K487XW4KW" className="home-btn home-btn-primary" target="_blank" rel="noopener noreferrer">Book Appointment</a>
                <a href="/#/services" className="home-btn">View Our Services</a>
                <a href="/#/contact" className="home-btn">Contact Us</a>
            </div>
        </div>
    );
};

export default Home;