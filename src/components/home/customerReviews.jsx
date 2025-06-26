import React, { useState, useEffect } from 'react';
import Button from '../commonComponents/button';
import '../../../src/index.css';

export default function CustomerReviews() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Pranav Kumar",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Excellent service! The team was professional and completed the AC repair quickly. Highly recommended for all AC services.",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        },
        
        {
            id: 2,
            name: "Rajesh Patel",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Best AC service I've ever used. The technicians are skilled and the pricing is transparent. Will definitely use again!",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Anjali Singh",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Quick and reliable service. The maintenance package saved me money and my AC is working perfectly now.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "Amit Kumar",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Great platform for buying and selling ACs. The verification process is thorough and I felt safe throughout the transaction.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 5,
            name: "Neha Gupta",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Outstanding customer support! They helped me choose the right AC service and the technician was very professional.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 6,
            name: "Vikram Malhotra",
            rating: "⭐⭐⭐⭐⭐",
            quote: "Fast, efficient, and affordable. The subscription model is great value for money. Highly satisfied with the service!",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => 
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);

    const goToPrevious = () => {
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToReview = (index) => {
        setCurrentReviewIndex(index);
    };

    const currentReview = reviews[currentReviewIndex];

    return (
        <div className="reviews-section">
            <div className="reviews-header">
                <div className="reviews-navigation">
                    <Button text="<" className="nav-button" onClick={goToPrevious} />
                    <Button text=">" className="nav-button" onClick={goToNext} />
                </div>
                <h2 className="reviews-title mobile-single-line">
                    What Are Happy <span className="highlight">Customers</span> Saying !!
                </h2>
                <p className="reviews-description">
                    Don't just take our word for it. Here's what our satisfied customers have to say about their experience with AC Wallah.
                </p>
                
                {/* Review indicators */}
                <div className="review-indicators">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentReviewIndex ? 'active' : ''}`}
                            onClick={() => goToReview(index)}
                        />
                    ))}
                </div>
            </div>
            
            <div className="review-card">
                <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="review-card__image"
                />
                <div className="review-card__content">
                    <h3 className="review-card__name">{currentReview.name}</h3>
                    <p className="review-card__rating">{currentReview.rating}</p>
                    <blockquote className="review-card__quote">
                        "{currentReview.quote}"
                    </blockquote>
                </div>
            </div>
        </div>
    );
}