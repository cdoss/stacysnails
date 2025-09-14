
import React, { useEffect } from "react";
import "./Services.css";

const services = [
  {
    category: "Manicures",
    items: [
      { name: "Classic Manicure", price: "$25", desc: "A classic treatment that includes a soothing soak, nail shaping, cuticle care, moisturizer, and your choice of classic polish." },
      { name: "Gel Manicure", price: "$35", desc: "All the benefits of our Classic Manicure finished with chip-resistant gel polish for lasting shine." },
      { name: "Dip Powder Manicure", price: "$55", desc: "All the benefits of our Classic Manicure topped with durable, long-lasting dip powder color." },
      { name: "Color Change (Classic Polish)", price: "$10", desc: "Quick nail shaping and buffing finished with a fresh coat of classic polish." },
      { name: "Color Change (Gel Polish)", price: "$30", desc: "Quick nail shaping and buffing finished with chip-resistant gel polish." }
    ]
  },
  {
    category: "Pedicures",
    items: [
      { name: "Classic Pedicure", price: "$35", desc: "Relaxing soak, nail shaping, cuticle care, exfoliation, light callus removal, moisturizer and your choice of classic polish." },
      { name: "Gel Pedicure", price: "$50", desc: "All the benefits of our Classic Pedicure finished with chip-resistant gel polish." },
      { name: "Spa Pedicure", price: "$60", desc: "A pampering upgrade that includes an exfoliating scrub, hydrating mask, hot stone massage, and classic polish." },
      { name: "Gel Spa Pedicure", price: "$70", desc: "All the indulgence of the Spa Pedicure finished with chip-resistant gel polish." },
      { name: "Color Change (Classic Polish)", price: "$15", desc: "Quick nail shaping and buffing finished with a fresh coat of classic polish." },
      { name: "Color Change (Gel Polish)", price: "$35", desc: "Quick nail shaping and buffing finished with chip-resistant gel polish." }
    ]
  },
  {
    category: "Combinations",
    items: [
      { name: "Classic Mani & Classic Pedi", price: "$60", desc: "Complete manicure and pedicure with full nail care and classic polish on both hands and feet." },
      { name: "Gel Mani & Classic Pedi", price: "$70", desc: "Complete manicure and pedicure services finished with gel polish on hands and classic polish on feet." },
      { name: "Gel Mani & Gel Pedi", price: "$80", desc: "Complete manicure and pedicure services finished with gel polish on both hands and feet." }
    ]
  },
  {
    category: "Nail Enhancements",
    items: [
      { name: "Acrylic Full Set (Classic Polish)", price: "$40+ (Refill $30+)", desc: "Acrylic powder and overlay application for added length and durability finished with classic polish." },
      { name: "Acrylic Full Set (Gel Polish)", price: "$50+ (Refill $40+)", desc: "Acrylic powder and overlay application for added length and durability finished with chip-resistant gel polish." },
      { name: "Dip Powder Full Set", price: "$65+", desc: "Pigmented dip powder and overlay application for vibrant color and added strength." },
      { name: "Ombré Full Set", price: "$65+ (Refill $50+)", desc: "Pigmented dip powder and overlay application with a gradient color effect for a soft, blended finish." },
      { name: "Builder Gel Full Set", price: "$65+ (Refill $50+)", desc: "Structured overlay using builder gel to strengthen and shape natural nails." },
      { name: "Gel-X Full Set", price: "$65+ (Refill $50+)", desc: "Soft gel overlay application for flexible, lightweight length and strength with a natural appearance." }
    ]
  },
  {
    category: "Nail Add-Ons",
    items: [
      { name: "French Tip Design", price: "$10", desc: "Add a timeless, clean French tip to any manicure or pedicure. Per service." },
      { name: "Gel Polish Removal", price: "$10", desc: "Gentle removal of existing gel polish. Per service." },
      { name: "Nail Repair", price: "$5", desc: "Repair a cracked or broken nail. Per nail." },
      { name: "Soak/Take Off", price: "$15", desc: "Safe removal of acrylic, dip, or Gel-X extensions." },
      { name: "Custom Nail Art", price: "Varies", desc: "Personalized designs available upon request. Prices vary based on complexity. Call for details." }
    ]
  },
  {
    category: "Waxing",
    items: [
      { name: "Eyebrow", price: "$12", desc: "Professional eyebrow shaping and waxing." },
      { name: "Lip", price: "$5", desc: "Gentle waxing for smooth, hair-free lips." },
      { name: "Chin", price: "$8+", desc: "Targeted waxing for chin area." },
      { name: "Full Face", price: "$35+", desc: "Comprehensive waxing for the entire face." },
      { name: "Underarm", price: "$15+", desc: "Quick and effective underarm waxing." },
      { name: "Half Arm", price: "$20+", desc: "Waxing for lower or upper arms." },
      { name: "Full Arm", price: "$40+", desc: "Complete arm waxing." },
      { name: "Half Leg", price: "$35+", desc: "Waxing for lower or upper legs." },
      { name: "Full Leg", price: "$60+", desc: "Complete leg waxing." },
      { name: "Chest", price: "$30+", desc: "Professional chest waxing." },
      { name: "Stomach", price: "$15+", desc: "Targeted stomach waxing." },
      { name: "Back", price: "$40+", desc: "Comprehensive back waxing." },
      { name: "Bikini", price: "$25+", desc: "Basic bikini line waxing." },
      { name: "Brazilian", price: "$45+", desc: "Full Brazilian waxing." }
    ]
  }
];

const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
  <div className="page-container services-container">
      <h1>Our Services</h1>
      {services.map((section) => (
        <div key={section.category} className="services-category">
          <h2>{section.category}</h2>
          <div>
            {section.items.map((item) => (
              <div key={item.name} className="service-item">
                <div className="service-item-header">
                  <h3>{item.name}</h3>
                  <span className="service-price">{item.price}</span>
                </div>
                <p className="service-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;