import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import {
  ImFacebook,
  ImTwitter,
  ImLinkedin2,
  ImInstagram,
} from "react-icons/im";
import logo from "./components/images/logo.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-light navbar-expand-md navigation-home">
          <div className="container container-fluid">
            <div className="titleContainer">
              <img className="logoImage" src={logo} alt="First slide" />
            </div>
            <div className="menuitems navbar-collapse" id="navcol-1">
              <div className="menuitemsHeader">
                <div className="menuitemsHeaderName">
                  <p>Welcome to Library theme</p>
                </div>
                <div className="menuitemsHeaderSocial ">
                  <p>libraryTheme.com</p>
                  <ImFacebook />
                  <ImTwitter />
                  <ImInstagram />
                  <ImLinkedin2 />
                </div>
              </div>

              <div
                class="collapse navbar-collapse offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
              >
                <div class="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link home-link active" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/about">
                        ABOUT US
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/books">
                        OUR BOOKS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/blog">
                        BLOG
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/author">
                        AUTHORS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/events">
                        EVENTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/pages">
                        PAGES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link home-link" href="/contact">
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>

        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
