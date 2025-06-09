import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';
import FilterBar from './FilterBar';
import SkipDetailsModal from './SkipDetailsModal';
import '../styles.css';

const steps = [
  { id: 1, label: '📍 Postcode' },
  { id: 2, label: '🏠 Address' },
  { id: 3, label: '🗑️ Waste Type' },
  { id: 4, label: '🚛 Select Skip' },
  { id: 5, label: '📝 Permit Check' },
  { id: 6, label: '📅 Choose Date' },
  { id: 7, label: '💳 Payment' }
];

const SkipSizePage = () => {
  const [skips, setSkips] = useState([]);
  const [filteredSkips, setFilteredSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(100);
  const [size, setSize] = useState('');
  const [allowedOnRoad, setAllowedOnRoad] = useState('');
  const [allowsHeavyWaste, setAllowsHeavyWaste] = useState('');

  // Progress Step
  const [currentStep, setCurrentStep] = useState(4);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
        setFilteredSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = skips.filter(skip => {
      const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
      return (
        totalPrice >= parseFloat(minPrice) &&
        totalPrice <= parseFloat(maxPrice)
      );
    });

    if (size) {
      filtered = filtered.filter(skip => skip.size === parseInt(size));
    }

    if (allowedOnRoad !== '') {
      filtered = filtered.filter(skip => skip.allowed_on_road === (allowedOnRoad === 'true'));
    }

    if (allowsHeavyWaste !== '') {
      filtered = filtered.filter(skip => skip.allowsHeavyWaste === (allowsHeavyWaste === 'true'));
    }

    setFilteredSkips(filtered);
  }, [skips, minPrice, maxPrice, size, allowedOnRoad, allowsHeavyWaste]);

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  const handleCloseModal = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    setCurrentStep(5);
    setSelectedSkip(null);
  };

  const handleStepClick = (stepId) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  return (
    <div className="skip-size-page">
      {/* Progress Bar */}
      <div className="topbar-progress">
        {steps.map((step) => (
          <button
            key={step.id}
            className={`step-item ${step.id === currentStep ? 'active' : ''} ${step.id < currentStep ? 'completed' : ''}`}
            onClick={() => handleStepClick(step.id)}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* Page Title */}
      {currentStep === 4 && (
        <h1 className="page-title">Choose Your Skip Size</h1>
      )}

      {/* Filter and Skips Layout */}
      {currentStep === 4 && (
        <div className="content-container">
          <div className="filter-container">
            <FilterBar
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              size={size}
              setSize={setSize}
              allowedOnRoad={allowedOnRoad}
              setAllowedOnRoad={setAllowedOnRoad}
              allowsHeavyWaste={allowsHeavyWaste}
              setAllowsHeavyWaste={setAllowsHeavyWaste}
            />
          </div>

          <div className="divider" />

          <div className="skip-list">
            {loading ? (
              <p>Loading skips...</p>
            ) : filteredSkips.length > 0 ? (
              filteredSkips.map((skip) => (
                <SkipCard key={skip.id} skip={skip} onSelect={() => handleSelectSkip(skip)} />
              ))
            ) : (
              <p className="no-skips">No Skips available.</p>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedSkip && (
        <SkipDetailsModal
          skip={selectedSkip}
          onClose={handleCloseModal}
          onContinue={handleContinue}
        />
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="loading-bar">
          <div className="progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default SkipSizePage;
