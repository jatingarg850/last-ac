import React from 'react';
import '../../../src/index.css'; // Corrected the path to index.css
import Services from './services'; // Fixed the spelling of 'sevices'
import AcList from './aclist'; // Fixed the casing of 'aclist'
import CustomerReviews from './customerReviews'; // Verified the path
import Button from '../commonComponents/button';
import FormCard from './formCard';
import CommonCard from './commonCard';
import Navbar from '../commonComponents/navbar';

const Home = () => {
    return (
        <div style={{ padding: '0 24px' }}>
            <div className="home-main-container" style={{ maxWidth: '1200px', margin: '0 auto', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '32px 0' }}>
                <div style={{ marginBottom: '32px' }}>
                    <FormCard />
                </div>
                <h1 className="service-heading" style={{ marginBottom: '16px' }}>
                    Our
                    <span className='sub-heading'> Services</span>
                </h1>
                <div className='services-block' style={{ marginBottom: '32px' }}>
                    <Services />
                </div>
                <div style={{ marginBottom: '32px' }}>
                    <CommonCard
                        title="Looking to sell your Old AC!?"
                        desc="Get the best price with zero hassle! List your AC in just a few clicks and connect with genuine sellers instantly. Fast, easy, and secure."
                        buttonText="Sell Now"
                    />
                </div>
                <div className='common-header' style={{ marginBottom: '16px' }}>
                    <h1 className="service-heading" style={{ margin: 0 }}>
                        Old Listed
                        <span className='sub-heading'> AC Products</span>
                    </h1>
                    <Button text="See All" className="default-button" />
                </div>
                <div style={{ marginBottom: '32px' }}>
                    <AcList />
                </div>
                <div style={{ marginBottom: '32px' }}>
                    <CustomerReviews />
                </div>
                <div>
                    <CommonCard
                        title="Refer a friend and Get flat 20% off on any of the services!"
                        desc="Earn rewards effortlessly! Refer a friend to list their AC with us and both of you get exclusive benefits. Fast, easy, and rewarding."
                        buttonText="Refer Now"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;