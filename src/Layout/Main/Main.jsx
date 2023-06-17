import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Pages/Shared/Navigation/Navigation";
import Footer from "../../Component/Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="w-full bg-slate-200">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
