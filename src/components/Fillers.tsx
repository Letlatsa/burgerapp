import React from 'react';

interface Props {
FillerType:string;
FillerColor:string;
}

const Fillers :React.FC<Props> = ({FillerColor , FillerType})=> {

    return(<div style={{color :FillerColor }}>{FillerType}</div>);
};

export default Fillers;