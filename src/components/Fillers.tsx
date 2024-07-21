import React from 'react';
import './Fillers.css';

interface FillersProps {
  FillerColor: string;
  FillerType: string;
}

const Fillers: React.FC<FillersProps> = ({ FillerColor, FillerType }) => {
  return (
    <div className={`Fillers ${FillerType}`} style={{ backgroundColor: FillerColor }} >
      {FillerType}
    </div>
  );
};

export default Fillers;
