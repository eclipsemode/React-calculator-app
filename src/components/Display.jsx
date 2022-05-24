import React from 'react';

const Display = ({value, calculatedValue}) => {
    return (
        <div className="calc__display">
            <div className="calc__current-value">
                {value}
            </div>
            <div className="calc__final-value">
                {calculatedValue}
            </div>
        </div>
    );
};

export default Display;