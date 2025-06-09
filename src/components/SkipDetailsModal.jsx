import React from 'react';
import '../styles.css';

const SkipDetailsModal = ({ skip, onClose, onContinue }) => {
  if (!skip) return null;

  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <h2 id="modal-title" className="modal-title-centered">{skip.size} Yard Skip Details</h2>

        <div style={{ marginBottom: '16px' }}>
          <div className="modal-row">
            <strong>Price (Before VAT):</strong>
            <span>£{skip.price_before_vat}</span>
          </div>
          <div className="modal-row">
            <strong>VAT:</strong>
            <span>{skip.vat}%</span>
          </div>
          <div className="modal-row">
            <strong>Total Price:</strong>
            <span>£{totalPrice}</span>
          </div>
          <div className="modal-row">
            <strong>Hire Period:</strong>
            <span>{skip.hire_period_days} days</span>
          </div>
          <div className="modal-row">
            <strong>Allowed On Road:</strong>
            <span className={skip.allowed_on_road ? "green-tick" : "red-cross"}>
              {skip.allowed_on_road ? "✅ Yes" : "❌ No"}
            </span>
          </div>
          <div className="modal-row">
            <strong>Allows Heavy Waste:</strong>
            <span className={skip.allows_heavy_waste ? "green-tick" : "red-cross"}>
              {skip.allows_heavy_waste ? "✅ Yes" : "❌ No"}
            </span>
          </div>
        </div>

        <div className="modal-disclaimer">
   <div className="disclaimer-text">
    <strong>⚠️Disclaimer:</strong>
    <p>
      Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
    </p>
  </div>
</div>


        <div className="modal-buttons modal-buttons-center">
          <button className="btn cancel" onClick={onClose}>Cancel</button>
          <button className="btn continue" onClick={onContinue}>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default SkipDetailsModal;
