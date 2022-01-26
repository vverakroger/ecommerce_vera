import AppLogo from './Logo.png';
import CartWidget from '../Cartwidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return(
        <div className="NavBar">
            <div className="NavBar_Img">
                <img src={AppLogo} alt="logo" />
            </div>
            <div className="NavBar_Elements">
                <p href="">Home</p>
                <p href="">Gallery</p>
                <p href="">Shop</p>
            </div>
            <div className="NavBar_CartWidget">
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar;
