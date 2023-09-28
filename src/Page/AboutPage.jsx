import BloodType from "../Component/About/BloodType/BloodType";
import DonationBlood from "../Component/About/DonationBlood/DonationBlood";
import PageTopBanner from "../Component/Pages/Shared/PageTopBanner";

const AboutPage = () => {
  return (
    <>
      <PageTopBanner title={"About"} secoundtitle={"About"} />
      <DonationBlood />
      <BloodType />
    </>
  );
};

export default AboutPage;
