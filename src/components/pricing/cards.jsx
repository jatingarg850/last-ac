import React from 'react';
import Button from '../commonComponents/button';

const openRazorpay = (amount, planName) => {
    const options = {
        key: 'rzp_live_CCwNA1P2zKcBn9', // Replace with your Razorpay key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: planName,
        description: `Subscribe to ${planName}`,
        handler: function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
            name: '',
            email: '',
        },
        theme: {
            color: '#0066ff',
        },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};

// Ensure Razorpay script is loaded
if (typeof window !== 'undefined' && !window.Razorpay) {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
}

const SubscriptionCardsMain = () => {
    return (
        <div className="plan">
            <div className="inner">
                <span className="pricing">
                    <span>
                        $49 <small>/ m</small>
                    </span>
                </span>
                <p className="title">Professional</p>
                <p className="info">This plan is for those who have a team already and running a large business.</p>
                <ul className="features">
                    <li>
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span><strong>20</strong> team members</span>
                    </li>
                    <li>
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>Plan <strong>team meetings</strong></span>
                    </li>
                    <li>
                        <span className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>File sharing</span>
                    </li>
                </ul>
                <div className="action">
                    <Button text="Choose plan" className="default-button" onClick={() => openRazorpay(49 * 80, 'Professional')} />
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCardsMain;