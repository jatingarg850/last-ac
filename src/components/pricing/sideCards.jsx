import React from 'react';
import Button from '../commonComponents/button';
import { API_ENDPOINTS } from '../../config/api';

const openRazorpay = async (amount, planName) => {
    const options = {
        key: 'rzp_live_CCwNA1P2zKcBn9', // Replace with your Razorpay key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: planName,
        description: `Subscribe to ${planName}`,
        handler: async function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // Update user account_type in backend and localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                try {
                    const updatedUser = { ...user, account_type: planName.toLowerCase() };
                    // Update backend
                    await fetch(`${API_ENDPOINTS.USERS}/${user.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedUser)
                    });
                    // Update localStorage
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    window.location.reload(); // Refresh to update UI
                } catch (err) {
                    alert('Failed to update account type. Please contact support.');
                }
            }
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

const SubscriptionCards = () => {
    const plans = [
        {
            name: 'Basic',
            price: 1, // Example price in USD
            description: 'This plan is for individuals or small teams just getting started.',
            features: [
                '5 team members',
                'Basic support',
                'Limited file sharing',
            ],
        },
        {
            name: 'Intermediate',
            price: 2, // Example price in USD
            description: 'This plan is for growing teams needing more features.',
            features: [
                '10 team members',
                'Priority support',
                'Unlimited file sharing',
            ],
        },
        {
            name: 'Advanced',
            price: 3, // Example price in USD
            description: 'This plan is for large teams and businesses with advanced needs.',
            features: [
                'Unlimited team members',
                '24/7 support',
                'Advanced analytics',
            ],
        },
    ];

    return (
        <>
            {plans.map((plan, idx) => (
                <div className="plan" key={plan.name}>
                    <div className="inner">
                        <span className="pricing">
                            <span>
                                ${plan.price} <small>/ m</small>
                            </span>
                        </span>
                        <p className="title">{plan.name}</p>
                        <p className="info">{plan.description}</p>
                        <ul className="features">
                            {plan.features.map((feature, i) => (
                                <li key={i}>
                                    <span className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                        </svg>
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="action">
                            <Button
                                text="Get Started"
                                className="default-button"
                                onClick={() => openRazorpay(plan.price, plan.name)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SubscriptionCards;