import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';
import FilterBar from './FilterBar';
import SkipDetailsModal from './SkipDetailsModal';
import '../styles.css';

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
  let filteredSkips = skips;

  filteredSkips = filteredSkips.filter((skip) => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    return (
      totalPrice >= parseFloat(minPrice) &&
      totalPrice <= parseFloat(maxPrice)
    );
  });

  if (size) {
    filteredSkips = filteredSkips.filter((skip) => skip.size === parseInt(size));
  }

  if (allowedOnRoad !== '') {
    filteredSkips = filteredSkips.filter(
      (skip) => skip.allowed_on_road === (allowedOnRoad === 'true')
    );
  }

  if (allowsHeavyWaste !== '') {
    filteredSkips = filteredSkips.filter(
      (skip) => skip.allows_heavy_waste === (allowsHeavyWaste === 'true')
    );
  }

  setFilteredSkips(filteredSkips);
}, [skips, minPrice, maxPrice, size, allowedOnRoad, allowsHeavyWaste]);


  const handleSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const handleCloseModal = () => {
    setSelectedSkip(null);
  };

  if (loading) {
    return <div className="loading">Loading skips...</div>;
  }

  return (
    <div className="skip-size-page">
      <h1 className="title">Choose Your Skip Size</h1>
      <FilterBar
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        size={size}
        setSize={setSize}
        allowedOnRoad={allowedOnRoad}
        setAllowedOnRoad={setAllowedOnRoad}
        allowsHeavyWaste={allowsHeavyWaste}
        setAllowsHeavyWaste={setAllowsHeavyWaste}
      />
      <div className="skip-list">
  {filteredSkips.length > 0 ? (
    filteredSkips.map(skip => (
      <SkipCard key={skip.id} skip={skip} onSelect={() => setSelectedSkip(skip)} />
    ))
  ) : (
    <p className="no-skips">No Skips available.</p>
  )}
  {selectedSkip && (
    <SkipDetailsModal skip={selectedSkip} onClose={handleCloseModal} />
  )}
</div>

    </div>
  );
};

export default SkipSizePage;
