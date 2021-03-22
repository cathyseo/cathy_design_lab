import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

/* Import image */
import linkedin from './images/linkedin.svg';
import insta from './images/insta.svg';
import twitter from './images/twitter.svg';
import dribble from './images/dribble.svg';

/* Import pages */
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Logo */}
            <svg width="42" height="90" viewBox="0 0 42 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="child bounce" cx="21" cy="42" r="14" stroke="white" stroke-width="6" />
              <path d="M21 90C32.598 90 42 80.3131 42 68.3636H0C0 80.3131 9.40202 90 21 90Z" fill="white" />
            </svg>

            <div className="navListBox">
              <ul className="navList navbar-nav mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div className="portfolioBG">
          <div className="portfolio container">
            <h3>Do you want to see my UX Case Study?</h3>
            <a className="btn btn-primary portfolioBtn" href="http://cathyseo.com/" target="_blank">Visit my official portfolio site</a>
          </div>
        <footer className="footerBG">
          <div className="container">
          <a href="https://www.linkedin.com/in/cathydesigner/" target="_blank"><img src={linkedin} className="social" alt="linkedin"></img></a>
          <a href="https://www.instagram.com/cathyseo_/" target="_blank"><img src={insta} className="social" alt="instagram"></img></a>
          <a href="https://twitter.com/CathySeo2" target="_blank"><img src={twitter} className="social" alt="twitter"></img></a>
          <a href="https://dribbble.com/Cathy-Seo" target="_blank"><img src={dribble} className="social" alt="dribble"></img></a>
            <p>© 2021 Cathy Seo.</p>
          </div>
        </footer>
        </div>
      </div>
    </Router>
  );
}