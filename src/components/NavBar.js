import './NavBar.css';
import logo from './logo.png';

function NavBar() {
    return(
        <div className="NavBar">
            <div className="NavBar_Img">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="NavBar_Elements">
                <p href="Home.js">Home</p>
                <p href="Gallery.js">Gallery</p>
                <p href="Shop.js">Shop</p>
                <p href="Cart.js">Cart</p>
            </div>
        </div>
    );
}

export default NavBar;
