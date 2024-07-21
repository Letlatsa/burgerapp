import React from 'react';

interface Props {
  FillerType: string;
  FillerColor: string;
}

const Fillers: React.FC<Props> = ({ FillerColor, FillerType }) => {
  return <div style={{ backgroundColor: FillerColor }}>{FillerType}</div>;
};

export default Fillers;
