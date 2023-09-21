import { Outlet } from "react-router-dom";
import Navigation from "../../Component/Pages/Shared/Navigation/Navigation";
import Footer from "../../Component/Pages/Shared/Footer/Footer";
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div className="w-full bg-white">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Main;
