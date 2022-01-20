import './NavBar.css';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNavBar() {
  return (
    <div className="TopNavBar">
      <nav class="navbar navbar-expand-lg py-3 navbar-light shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand">
            <img src={logo} width="250" alt="" class="d-inline-block align-middle mr-2"></img>
          </a>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Products</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavBar;
