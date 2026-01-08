import React from 'react';
import './AutoFinalCost.css';

const AutoFinalCost = () => {
    const factors = [
        "Type of vehicle (car, bike, fleet)",
        "Shoot location (studio or outdoor)",
        "Number of angles and setups",
        "Level of editing and retouching",
        "Usage requirements (web, ads, promotions)"
    ];

    return (
        <div className="final-cost-section">
            <div className="final-cost-container">
                <h2 className="final-cost-title">Final Cost is influenced by</h2>
                
                <ul className="cost-factors-list">
                    {factors.map((factor, index) => (
                        <li key={index} className="cost-factor-item">
                            <span className="cost-number">{index + 1}</span>
                            {factor}
                        </li>
                    ))}
                </ul>

                <div className="cost-bottom-cards">
                    <div className="cost-cards-row">
                        <div className="cost-feature-card">
                            <img src="/asset/ServicePages/Automotive/cost1.png" alt="No hidden charges" className="cost-card-icon" />
                            <p className="cost-card-text">No hidden charges</p>
                        </div>
                        <div className="cost-feature-card">
                            <img src="/asset/ServicePages/Automotive/cost2.png" alt="Escrow-secured payments" className="cost-card-icon" />
                            <p className="cost-card-text">Escrow-secured payments</p>
                        </div>
                    </div>
                    <div className="cost-cards-row">
                         <div className="cost-feature-card full-width">
                            <img src="/asset/ServicePages/Automotive/cost3.png" alt="Pay only after preview approval" className="cost-card-icon" />
                            <p className="cost-card-text">Pay only after preview approval</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoFinalCost;
