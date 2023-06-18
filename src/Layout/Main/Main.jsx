import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Pages/Shared/Navigation/Navigation";
import Footer from "../../Component/Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="w-full bg-slate-200">
            <Navigation></Navigation>
            <div className="w-full pt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
