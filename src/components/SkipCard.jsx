import React from 'react';
import '../styles.css';


const SkipCard = ({ skip, onSelect, imageUrl }) => {
  // Calculate total price including VAT
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className="skip-card">
      {/* Skip size/title */}
      <h2>{skip.size} Yard Skip</h2>
      
      {/* Skip image - using prop for dynamic URL */}
      <img 
        src={imageUrl} 
        className="skip-card-img"
        alt={`${skip.size} yard skip container`}  // Accessibility improvement
      />
      
      {/* Skip hire period information */}
      <p>Hire Period: {skip.hire_period_days} days</p>
      
      {/* Pricing information with VAT */}
      <p>Price: £{totalPrice} (inc VAT)</p>
      
      {/* Feature tags container */}
      <div className="skip-features">
        {/* Road allowance indicator */}
        <div className="details">
          {skip.allowed_on_road ? (
            <span className="tag green">✅ Allowed on Road</span>
          ) : (
            <span className="tag red">❌ Not Allowed on Road</span>
          )}
        </div>
        
        {/* Heavy waste allowance indicator */}
        <div className="details">
          {skip.allows_heavy_waste ? (
            <span className="tag green">✅ Allows Heavy Waste</span>
          ) : (
            <span className="tag red">❌ No Heavy Waste</span>
          )}
        </div>
      </div>
      
      {/* Action button - triggers onSelect callback */}
      <button 
        onClick={() => onSelect(skip)} 
        className="select-button"
        aria-label={`View details for ${skip.size} yard skip`}  // Accessibility
      >
        View Details
      </button>
    </div>
  );
};

export default SkipCard;