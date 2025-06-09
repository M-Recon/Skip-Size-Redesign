import React from 'react';

const PHASES = [
  { key: 'postcode', label: '📍 Postcode' },
  { key: 'wasteType', label: '🗑️ Waste Type' },
  { key: 'selectSkip', label: '🚛 Select Skip' },
  { key: 'permitCheck', label: '📝 Permit Check' },
  { key: 'chooseDate', label: '📅 Choose Date' },
  { key: 'payment', label: '💳 Payment' }
];

const TopBar = ({ activePhase, onPhaseChange }) => {
  return (
    <div className="w-full bg-black text-white flex justify-start items-center px-4 py-3 border-b border-gray-700 overflow-x-auto whitespace-nowrap">
      {PHASES.map((phase) => (
        <div
          key={phase.key}
          className={`flex items-center gap-2 mr-6 cursor-pointer ${
            activePhase === phase.key ? 'text-orange-400 font-bold border-b-2 border-orange-400' : ''
          }`}
          onClick={() => onPhaseChange(phase.key)}
        >
          <span className="text-sm">{phase.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBar;
