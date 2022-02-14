import AppLogo from './Logo.png';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            <div className="NavBar">
                <div className="NavBar_Img">
                    <img src={AppLogo} alt="logo" />
                </div>
                <div className="NavBar_Elements">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/gallery">Gallery</Link></p>
                    <p><Link to="/shop">Shop</Link></p>
                </div>
                <div className="NavBar_CartWidget">
                    <Link to="/cart"><CartWidget /></Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
