import React, { useState } from 'react';
import './PaymentDetails.css';

const PaymentDetails = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <div className="payment-details-container">
            <div className="payment-details-content">
                <h1 className="payment-title">Payment Details</h1>
                <p className="payment-subtitle">Review your payment before proceeding</p>

                <div className="booking-amount-section">
                    <span className="amount-label">Booking Amount</span>
                    <span className="amount-value">₹40,000</span>
                </div>

                <div className="payment-divider"></div>

                <h2 className="payment-method-title">How would you like to pay ?</h2>

                <div className="payment-options">
                    <label className="payment-option">
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="partial" 
                            checked={paymentMethod === 'partial'}
                            onChange={handlePaymentChange}
                        />
                        <span className="radio-custom"></span>
                        <span className="option-label">Partial Payment</span>
                    </label>

                    <label className="payment-option">
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="full" 
                            checked={paymentMethod === 'full'}
                            onChange={handlePaymentChange}
                        />
                        <span className="radio-custom"></span>
                        <span className="option-label">Full Payment</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;
