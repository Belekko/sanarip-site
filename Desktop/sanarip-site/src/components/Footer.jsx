import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="fr-first-part">
        <div className="logo">Logo</div>
        <nav className="navbar">
          <ul className="lists">
            <li className="list">Product</li>
            <li className="list">Our story </li>
            <li className="list">Join us</li>
            <li className="list">Demo</li>
          </ul>
        </nav>
      </div>
      <div className="fr-second-part">
        <div>
          <div>
            <img
              src="	https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c8481607160fef6465_linkedin-1.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="	https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c9db0fd10ea591c102_twitter-1.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c8abd9e51cfe24b334_instagram.svg"
              alt=""
            />
          </div>
        </div>
        <ul className="lists">
          <li className="list">Terms of service</li>
          <li className="list">Privacy policy</li>
          <li className="list">Imprint</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
