import React from 'react';
import './arrow-animation.css';

const Arrows = () => (
    <div className="arrow-animated-wrapper">
        <div className="arrow1">
            <div className="point first"></div>
            <div className="point first"></div>
        </div>
        
        <div className="arrow2">
            <div className="point second"></div>
            <div className="point second"></div>
        </div>

        <div className="arrow3">
            <div className="point third"></div>
            <div className="point third"></div>
        </div>
    </div>
)

export { Arrows };