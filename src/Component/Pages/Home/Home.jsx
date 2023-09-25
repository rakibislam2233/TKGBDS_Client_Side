import React from 'react';
import Banner from './Banner/Banner';
import BloodType from './BloodType/BloodType';
import DonationBlood from './DonationBlood/DonationBlood';
import DonationBloodBenifits from './DonationBloodBenifits/DonationBloodBenifits';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DonationBlood/>
            <BloodType/>
            {/* <DonationBloodBenifits/> */}
        </div>
    );
};

export default Home;