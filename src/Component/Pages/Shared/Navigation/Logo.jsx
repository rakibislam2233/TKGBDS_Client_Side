import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'}>
            <img className='w-16 h-16' src='https://i.postimg.cc/3xWxWZDV/Logo.png' alt="" />
        </Link>
    );
};

export default Logo;