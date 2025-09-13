import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <section className="about-section">
        <h2 className="about-title">Treat Yourself</h2>
        <div className="about-row">
          <div className="about-blurb">
            <p>
              At Stacy’s Nails & Spa, your satisfaction is our top priority. Our experienced, licensed technicians are here to help you relax, refresh, and feel your best with the finest nail care and waxing services in town.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src="https://img1.wsimg.com/isteam/stock/42665" alt="Relaxed hands with manicure" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="about-title">Our Commitment to Cleanliness</h2>
        <div className="about-row">
          <div className="about-blurb">
            <p>
              We uphold the highest standards in hygiene and sanitation to ensure a safe, comfortable experience for every client. You can feel confident knowing you're in clean, caring hands.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src="https://img1.wsimg.com/isteam/stock/2716" alt="Clean towels" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="about-title">Walk-Ins Always Welcome</h2>
        <div className="about-row">
          <div className="about-blurb">
            <p>
              We know life doesn’t always run on schedule. That’s why we gladly welcome walk-ins during all business hours with no appointment necessary.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src="https://img1.wsimg.com/isteam/stock/42711" alt="Open sign" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;