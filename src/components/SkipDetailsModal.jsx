import React from 'react';
import '../styles.css';

const SkipDetailsModal = ({ skip, onClose }) => {
  if (!skip) return null;

  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{skip.size} Yard Skip Details</h2>
        <p><strong>Price (Before VAT):</strong> £{skip.price_before_vat}</p>
        <p><strong>VAT:</strong> {skip.vat}%</p>
        <p><strong>Total Price:</strong> £{totalPrice}</p>
        <p><strong>Hire Period:</strong> {skip.hire_period_days} days</p>
        <p>
          <strong>Allowed On Road:</strong>{" "}
          {skip.allowed_on_road ? (
            <span className="green-tick">✅ Yes</span>
          ) : (
            <span className="red-cross">❌ No</span>
          )}
        </p>
        <p>
          <strong>Allows Heavy Waste:</strong>{" "}
          {skip.allows_heavy_waste ? (
            <span className="green-tick">✅ Yes</span>
          ) : (
            <span className="red-cross">❌ No</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SkipDetailsModal;
