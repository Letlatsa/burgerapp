import React from 'react';

interface breadProps{
    BreadColor:string;
    BreadType:string; 
}

const Bread:React.FC<breadProps> = ({BreadColor, BreadType}) => {
    return<div style={{color : BreadColor}}>{BreadType}</div>;
};
 export default Bread;