
import React, { useEffect } from "react";
import "./Services.css";


const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <div className="page-container services-container">
      <h1>Our Services</h1>
      {/* TODO: Replace this placeholder with services fetched from API */}
      <div className="services-placeholder" style={{textAlign: 'center', padding: '2rem', color: '#888'}}>
        <p>Service list will appear here soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default Services;