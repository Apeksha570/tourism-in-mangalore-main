// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteElement,
  Link,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Carousel, Button } from "react-bootstrap";
import DestinationList from "./DestinationList";
import DestinationDetail from "./DestinationDetail";
import ContactForm from "./ContactForm";
import Blogs from "./Blogs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Import the custom CSS file
import "./App.css";
import img1 from "./Images/beachpic.jpg";
import img2 from "./Images/kudroli.jpg";
import img3 from "./Images/pilikulazoo.jpg";
import img4 from "./Images/karinja.jpg";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar className="custom-navbar" expand="lg">
          <Navbar.Brand className="brand-heading">NAMMA KUDLA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* This pushes the Nav items to the right */}
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
              
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <Link to="/travel" className="dropdown-item">
                  Travel
                </Link>
                <Link to="/destinations" className="dropdown-item">
                  Destinations
                </Link>
                <Link to="/experience" className="dropdown-item">
                  Experience
                </Link>
              </NavDropdown>
              <Button variant="outline-primary" className="ms-2" as={Link} to="/signin">
                Sign In
              </Button>
              <Button variant="primary" className="ms-2" as={Link} to="/signup">
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Carousel */}
        <Carousel className="custom-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={img4}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
        <br />
        {/* Content of your app (unchanged) */}
        <Routes>
          <RouteElement path="/" element={<DestinationList />} />
          <RouteElement path="/destination/:id" element={<DestinationDetail />} />
          <RouteElement path="/contact" element={<ContactForm />} />
          <RouteElement path="/blogs" element={<Blogs />} />
          <RouteElement path="/signin" element={<SignIn />} />
          <RouteElement path="/signup" element={<SignUp />} />
        </Routes>

        {/* Footer */}
        <div className="custom-footer">
          <div className="footer-section">
            <h3>Connect with us</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Email: contact@nammakudla.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
              <p>Feedback</p>
              <input type="text-area" placeholder="Feedback" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
