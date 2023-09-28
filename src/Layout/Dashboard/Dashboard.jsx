import { Outlet } from "react-router-dom";
import Footer from "../../Component/Pages/Shared/Footer/Footer";
import Navigation from "../../Component/Pages/Shared/Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import PageTopBanner from "../../Component/Pages/Shared/PageTopBanner";

const Dashboard = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Navigation />
      <PageTopBanner title={"Dashboard"} secoundtitle={"Dashboard"}/>
      <div className="w-full container my-10 mx-auto  grid grid-cols-1 md:grid-cols-12 gap-8 p-5">
        <div className=" md:h-screen md:col-span-4 shadow-lg rounded bg-slate-50 ">
          <Sidebar />
        </div>
        <div className=" md:col-span-8 shadow-lg rounded text-gray-700 bg-slate-50 ">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Dashboard;
