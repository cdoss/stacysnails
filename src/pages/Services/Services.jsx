
import React, { useEffect, useState } from "react";
import "./Services.css";


const Services = () => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Services";
  }, []);

  useEffect(() => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  fetch(`${API_BASE_URL}/services`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch services");
        return res.json();
      })
      .then((data) => {
        console.log("API response for services:", data);
        // Group services by category
        const grouped = data.reduce((acc, item) => {
          const cat = item.category || 'Other';
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {});
        // Convert to array of { category, items }
        const groupedArr = Object.entries(grouped).map(([category, items]) => ({ category, items }));
        setServices(groupedArr);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container services-container">
      <h1>Our Services</h1>
      {loading && (
        <div className="services-placeholder" style={{textAlign: 'center', padding: '2rem', color: '#888'}}>
          <p>Loading services...</p>
        </div>
      )}
      {error && (
        <div className="services-placeholder" style={{textAlign: 'center', padding: '2rem', color: 'red'}}>
          <p>Error: {error}</p>
        </div>
      )}
      {services && Array.isArray(services) && services.length > 0 ? (
        services.map((section, idx) => (
          section && Array.isArray(section.items) ? (
            <div key={section.category || idx} className="services-category">
              <h2>{section.category}</h2>
              <div>
                {section.items.map((item) => (
                  item ? (
                    <div key={item.id} className="service-item">
                      <div className="service-item-header">
                        <h3>{item.name}</h3>
                        <span className="service-price">{item.price}</span>
                      </div>
                      <p className="service-item-desc">{item.description}</p>
                    </div>
                  ) : null
                ))}
              </div>
            </div>
          ) : null
        ))
      ) : null}
      {services && Array.isArray(services) && services.length === 0 && !loading && !error && (
        <div className="services-placeholder" style={{textAlign: 'center', padding: '2rem', color: '#888'}}>
          <p>No services found.</p>
        </div>
      )}
    </div>
  );
};

export default Services;