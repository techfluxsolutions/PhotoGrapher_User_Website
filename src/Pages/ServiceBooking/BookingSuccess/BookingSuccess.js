import './BookingSuccess.css';

const BookingSuccess = () => {
    return (
        <div className="booking-success-container">
            <div className="booking-success-content">
                <h1 className="success-title">
                    Yayy ! It’s Done 
                    <img src="/asset/BookingDone/yayy.png" alt="Party Hat" className="success-icon" />
                </h1>
                
                <div className="success-image-container">
                    <img src="/asset/BookingDone/tick.png" alt="Success Tick" className="success-tick" />
                </div>

                <p className="success-message">Be ready to get behind the lens!!</p>
            </div>
        </div>
    );
};

export default BookingSuccess;
