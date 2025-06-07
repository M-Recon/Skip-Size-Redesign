import React, { useState } from 'react';
import SkipCard from './SkipCard';
import SkipDetailsModal from './SkipDetailsModal';

const SkipSelector = ({ skips }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  const handleCloseModal = () => {
    setSelectedSkip(null);
  };

  return (
    <div>
      <h2>Select a Skip</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {skips.map((skip) => (
          <SkipCard key={skip.id} skip={skip} onSelect={handleSelectSkip} />
        ))}
      </div>

      {selectedSkip && (
        <SkipDetailsModal skip={selectedSkip} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SkipSelector;
