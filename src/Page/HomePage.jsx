import Gallery from "../Component/Home/Gallery";
import Banner from "../Component/Home/Banner/Banner";
import { useEffect } from "react";
import LottiFiles from "../Component/Home/lottiFiles/LottiFiles";
import Work from "../Component/Home/HowItIsWork/Work";
import BecomeDonar from "../Component/Home/BecomeDonar";
import FeedBack from "../Component/Home/FeedBack/FeedBack";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>TKGBDS</title>
      </Helmet>
      <Banner />
      <LottiFiles />
      <Work />
      <BecomeDonar />
      <FeedBack />
      <Gallery />
    </>
  );
};

export default HomePage;
