import React from 'react';
import Banner from './Banner/Banner';
import DonationBlood from './DonationBlood/DonationBlood';
import DonationBloodBenifits from './DonationBloodBenifits/DonationBloodBenifits';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonationBlood></DonationBlood>
            {/* <DonationBloodBenifits></DonationBloodBenifits> */}
        </div>
    );
};

export default Home;