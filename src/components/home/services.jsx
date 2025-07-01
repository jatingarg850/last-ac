import React from 'react';
import Button from '../commonComponents/button';

export default function Services() {
    const handleBookNow = () => {
        const formElement = document.querySelector('.form-card');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="services-responsive-grid">
            {/* AC Installation Card */}
            <div className="service-card">
                <img
                    src='https://www.onehourairftworth.com/wp-content/uploads/2018/03/Why-Heating-and-AC-Should-Be-Left-to-a-Professional-Fort-Worth-TX-1024x600.jpg'
                    alt="AC Installation"
                    className="service-card__image"
                />
                <div className="service-card__content">
                    <div className="service-card__header">
                        <div>
                            <h2 className="service-card__title">AC Installation</h2>
                            <p className="service-card__price">starts from ₹1200</p>
                        </div>
                        <Button text="Book Now" className="default-button" onClick={handleBookNow} />
                    </div>
                    <ul className="service-card__details">
                        <li>Pre Job Inspection: Comprehensive AC Diagnosis</li>
                        <li>Installation of both indoor and outdoor units</li>
                        <li>Post Job Inspection: Thorough checks of gas levels</li>
                        <li>30 Days ACWallah Warranty</li>
                    </ul>
                    <a href="#" className="service-card__link">Read More &gt;</a>
                </div>
            </div>
            {/* AC Repair Card 1 */}
            <div className="service-card">
                <img
                    src='https://www.onehourairftworth.com/wp-content/uploads/2018/03/Why-Heating-and-AC-Should-Be-Left-to-a-Professional-Fort-Worth-TX-1024x600.jpg'
                    alt="AC Repair"
                    className="service-card__image"
                />
                <div className="service-card__content">
                    <div className="service-card__header">
                        <div>
                            <h2 className="service-card__title">AC Repair</h2>
                            <p className="service-card__price">starts from ₹800</p>
                        </div>
                        <Button text="Book Now" className="default-button" onClick={handleBookNow} />
                    </div>
                    <ul className="service-card__details">
                        <li>Pre Job Inspection: Comprehensive AC Diagnosis</li>
                        <li>Installation of both indoor and outdoor units</li>
                        <li>Post Job Inspection: Thorough checks of gas levels</li>
                        <li>30 Days ACWallah Warranty</li>
                    </ul>
                    <a href="#" className="service-card__link">Read More &gt;</a>
                </div>
            </div>
            {/* AC Repair Card 2 */}
            <div className="service-card">
                <img
                    src='https://www.onehourairftworth.com/wp-content/uploads/2018/03/Why-Heating-and-AC-Should-Be-Left-to-a-Professional-Fort-Worth-TX-1024x600.jpg'
                    alt="AC Repair"
                    className="service-card__image"
                />
                <div className="service-card__content">
                    <div className="service-card__header">
                        <div>
                            <h2 className="service-card__title">AC Repair</h2>
                            <p className="service-card__price">starts from ₹800</p>
                        </div>
                        <Button text="Book Now" className="default-button" onClick={handleBookNow} />
                    </div>
                    <ul className="service-card__details">
                        <li>Pre Job Inspection: Comprehensive AC Diagnosis</li>
                        <li>Installation of both indoor and outdoor units</li>
                        <li>Post Job Inspection: Thorough checks of gas levels</li>
                        <li>30 Days ACWallah Warranty</li>
                    </ul>
                    <a href="#" className="service-card__link">Read More &gt;</a>
                </div>
            </div>
            {/* Gas Filling Card */}
            <div className="service-card">
                <img
                    src='https://www.onehourairftworth.com/wp-content/uploads/2018/03/Why-Heating-and-AC-Should-Be-Left-to-a-Professional-Fort-Worth-TX-1024x600.jpg'
                    alt="Gas Filling"
                    className="service-card__image"
                />
                <div className="service-card__content">
                    <div className="service-card__header">
                        <div>
                            <h2 className="service-card__title">Gas Filling</h2>
                            <p className="service-card__price">starts from ₹800</p>
                        </div>
                        <Button text="Book Now" className="default-button" onClick={handleBookNow} />
                    </div>
                    <ul className="service-card__details">
                        <li>Pre Job Inspection: Comprehensive AC Diagnosis</li>
                        <li>Installation of both indoor and outdoor units</li>
                        <li>Post Job Inspection: Thorough checks of gas levels</li>
                        <li>30 Days ACWallah Warranty</li>
                    </ul>
                    <a href="#" className="service-card__link">Read More &gt;</a>
                </div>
            </div>
        </div>
    );
}