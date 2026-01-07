import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PartialPayment.css';

const PartialPayment = () => {
    const navigate = useNavigate();
    // Default to 'partial' since this is the Partial Payment page
    const [paymentMethod, setPaymentMethod] = useState('partial');
    const [promoCode, setPromoCode] = useState('');

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <div className="partial-payment-container">
            <div className="partial-payment-content">
                <h1 className="payment-title">Payment Details</h1>
                <p className="payment-subtitle">Review your payment before proceeding</p>

                <div className="booking-amount-section">
                    <span className="amount-label">Booking Amount</span>
                    <span className="amount-value">₹40,000</span>
                </div>

                <div className="payment-divider"></div>

                <h2 className="payment-method-title">How would you like to pay ?</h2>

                <div className="payment-options">
                    <div className="payment-option-wrapper">
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
                        {paymentMethod === 'partial' && (
                            <div className="partial-details-text">
                                <p className="pay-now-text">Pay <span className="highlight-green">₹18,000</span> now</p>
                                <p className="outstanding-text">Outstanding amount <span className="highlight-yellow">₹20,000</span> to be paid after the event</p>
                            </div>
                        )}
                    </div>

                    <label className="payment-option full-payment-option">
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

                {/* Promo Code Section */}
                <div className="promo-code-section">
                    <h3 className="promo-title">Have a promo code?</h3>
                    <div className="promo-input-group">
                        <input 
                            type="text" 
                            placeholder="Enter Code" 
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="promo-input"
                        />
                        <button className="btn-apply">Apply</button>
                    </div>
                </div>

                {/* Payment Breakdown Summary */}
                <div className="payment-summary-grid">
                    <div className="summary-item">
                        <span className="summary-amount green-text">₹40,000</span>
                        <span className="summary-label">Total Payable<br/>Amount</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-amount silver-text">₹20,000</span>
                        <span className="summary-label">Upfront<br/>Payment<br/>(Now)</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-amount gold-text">₹20,000</span>
                        <span className="summary-label">Outstanding<br/>Amount</span>
                    </div>
                </div>

                <button className="btn-continue-payment" onClick={() => navigate('/booking-success')}>Continue to Payment</button>

            </div>
        </div>
    );
};

export default PartialPayment;
