
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/Banner/topBanner.jpg";
const PageTopBanner = ({ title,secoundtitle,thirdtitle}) => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-center   h-[calc(100vh-60vh)] flex justify-center items-center bg-cover bg-gray-700 bg-blend-overlay  bg-opacity-60"
    >
      <div className="flex flex-col justify-center items-center ">
        <h1
          data-aos="flip-left"
          className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500 uppercase text-center"
        >
          {title}
        </h1>
        <div className=" breadcrumbs text-slate-100 font-semibold">
          <ul>
            <li>
              <Link to={"/"}>
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            <li>
             
              {secoundtitle}
            </li>
            {
                thirdtitle &&  <li>
                {thirdtitle}
              </li>
            }
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTopBanner;