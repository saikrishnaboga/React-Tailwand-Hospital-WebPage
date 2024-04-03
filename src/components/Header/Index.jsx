import React from "react";

// import phone from './phone.png';

const Header = () => {
  return (
    <div className="mx-16">
      <div className="flex place-content-between ">
        <div className="no-container">
          <img
            src="./icons/phone.png"
            alt="call"
            className="h-2.5 mt-1 mr-1 img"
          />
          <span className="text-sm mr-1.5 contact-info">6281545629</span>
          <img
            src="./icons/message.png"
            alt="call"
            className="h-2.5 mt-1 mr-1 img"
          />
          <span className="text-sm contact-info">
            contact@sheikhafathimahospital.com
          </span>
        </div>
        <div className="flex">
          <img src="./icons/Insta.png" className="h-3.5 mt-2 mr-2 img" />
          <img src="./icons/Fb.png" className="h-3.5 mt-2 mr-2 img" />
          <img src="./icons/twitter.png" className="h-3.5 mt-2 mr-1 img" />
        </div>
      </div>
      <nav class="navbar flex place-content-between">
        <div className="flex">
          <img
            src="./icons/fathima-header-icon.png"
            className="h-11 "
            alt="fathima"
          />
          <ul className="nav-links flex lg:ml-28">
            <li className="mr-3 mt-2">
              <a href="#">Home</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">About</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">Specialities</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">Panel Of Doctors</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">Patient Guide</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">Blog</a>
            </li>
            <li className="mr-3 mt-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="call-to-action mt-2">
          <button className="callnow-button">Call Now</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
