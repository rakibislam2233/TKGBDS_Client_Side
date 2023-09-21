import ReactPlayer from "react-player";
const DonationBloodBenifits = () => {
  return (
    <div className="w-full cursor-pointer py-8 flex justify-center p-5">
     <ReactPlayer
          width="70%"
          height="70%"
          controls
          url="/src/assets/Banner/Donation.mp4"
        />
    </div>
  );
};

export default DonationBloodBenifits;
