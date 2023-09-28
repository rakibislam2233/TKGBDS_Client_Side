import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'}>
            <img className='w-14 h-14' src='https://i.postimg.cc/3xWxWZDV/Logo.png' alt="" />
        </Link>
    );
};

export default Logo;