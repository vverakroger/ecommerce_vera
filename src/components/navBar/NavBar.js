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
                    <Link to="/"><a className="SearchItems">Home</a></Link>
                    <Link to="/gallery"><a className="SearchItems">Gallery</a></Link>
                    <Link to="/shop"><a className="SearchItems">Shop</a></Link>
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
