import React from 'react';
import { color } from '../../constants/color';

const Line = ({ x1, y1, x2, y2, prevStatus, nextStatus }) => {
    const midX = (x1 + x2) / 2;

    return (
        <>
            <line 
                x1={x1} 
                y1={y1} 
                x2={midX} 
                y2={y2} 
                stroke={prevStatus ? color.primaryBlue : color.primaryDisabled} 
                strokeWidth="2" 
                strokeDasharray={prevStatus ? "0" : "4 4"}  
            />
            <line 
                x1={midX} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke={nextStatus ? color.primaryBlue : color.primaryDisabled} 
                strokeWidth="2" 
                strokeDasharray={nextStatus ? "0" : "4 4"} 
            />
        </>
    );
};

export default Line;
