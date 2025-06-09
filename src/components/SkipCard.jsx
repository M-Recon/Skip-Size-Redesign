import React from 'react';
import '../styles.css';

const SkipCard = ({ skip, onSelect }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className="skip-card">
      <h2>{skip.size} Yard Skip</h2>
      <p>Hire Period: {skip.hire_period_days} days</p>
      <p>Price: £{totalPrice} (inc VAT)</p>
      <div className="skip-features">
        <div>
          {skip.allowed_on_road ? (
            <span className="tag green">✅ Allowed on Road</span>
          ) : (
            <span className="tag red">❌ Not Allowed on Road</span>
          )}
        </div>
        <div>
          {skip.allows_heavy_waste ? (
            <span className="tag green">✅ Allows Heavy Waste</span>
          ) : (
            <span className="tag red">❌ No Heavy Waste</span>
          )}
        </div>
      </div>
      <button onClick={() => onSelect(skip)} className="select-button">
        View Details
      </button>
    </div>
  );
};

export default SkipCard;
