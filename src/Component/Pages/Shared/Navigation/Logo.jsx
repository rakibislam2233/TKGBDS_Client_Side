import { Link } from "react-router-dom";
import logo from '../../../../assets/Logo/logo1.png'
const Logo = () => {
    return (
        <Link to={'/'}>
          <img className="w-16" src={logo} alt="" />
        </Link>
    );
};

export default Logo;