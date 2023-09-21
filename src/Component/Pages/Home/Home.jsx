import React from 'react';
import Banner from './Banner/Banner';
import DonationBlood from './DonationBlood/DonationBlood';
import DonationBloodBenifits from './DonationBloodBenifits/DonationBloodBenifits';
import BloodType from './BloodType/BloodType';
import BloodSearch from './BloodSearch/BloodSearch';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BloodSearch/>
            <DonationBlood/>
            <BloodType/>
            <DonationBloodBenifits/>
        </div>
    );
};

export default Home;