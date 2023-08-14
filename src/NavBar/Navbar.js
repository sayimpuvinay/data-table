import './NavBar.css';
import { BrowserRouter as Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/Home">Home</a>
          <a class="nav-item nav-link" href="/About">About</a>
          <a class="nav-item nav-link" href="/Settings">Settings</a>
          <a class="nav-item nav-link" href="/Table">Table</a>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;