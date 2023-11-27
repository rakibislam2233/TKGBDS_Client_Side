import { Helmet } from "react-helmet-async";
import BloodType from "../Component/About/BloodType/BloodType";
import DonationBlood from "../Component/About/DonationBlood/DonationBlood";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Blood Donation | TKGBDS </title>
      </Helmet>
      <DonationBlood />
      <BloodType />
    </>
  );
};

export default AboutPage;
