import React from 'react';
import './Bread.css';

interface BreadProps {
  BreadColor: string;
  BreadType: string;
}

const Bread: React.FC<BreadProps> = ({ BreadColor, BreadType }) => {
  return (
    <div className="Bread" style={{ backgroundColor: BreadColor }}>
      {BreadType}
    </div>
  );
};

export default Bread;
