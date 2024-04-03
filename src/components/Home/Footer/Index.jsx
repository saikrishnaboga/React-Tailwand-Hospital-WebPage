import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#13BFB4] ml-12 mr-12 h-52 text-green-container rounded-lg flex flex-row justify-around items-center">
        <div className="flex flex-row justify-around">
          <div className="">
            <p className="text-white text-2xl font-light pb-2">
              Subscribe to our Newsletter
            </p>
            <p className="text-white pb-2 text-lg">
              To get latest News and updates
            </p>
            <div className="flex border border-white rounded h-8 w-18">
              <input
                type="text"
                placeholder="Enter your E-Mail: "
                className="text-black w-56 p-2"
              />
              <div className="p-2">
                <img className="h-4" src="./Footer/email.png" />
              </div>
            </div>
          </div>
        </div>
        <img className="h-28 pt-4 pb-4" src="./Footer/lines.png" alt="lines" />
        <div className="text-white">
          <h1 className="text-2xl">Contact Us</h1>
          <p className="pb-2">to get Latest News and Updates</p>
          <p className="flex pb-1">
            <img className="h-4 pt-1 pr-2" src="./Footer/phone.png" />
            +91-6281545629
          </p>
          <p className="flex">
            <img className="h-4 pt-1 pr-2" src="./Footer/mail.png" />
            Contact@sheikhafathimahospital.com
          </p>
        </div>
      </div>
      <div className="footer bg-[#0057A6] h-96 flex justify-around pt-40">
        <div className="flex flex-col justify-between h-64 ">
          <img className="h-16 pb-10" src="./icons/fathima-header-icon.png" />
          <div className="text-white">
            <p>A creation of Sheikha Fathima Zahara hospital, located at <br/>
            Banajara Hills, Road No. 12, HDFC Bank 2nd Floor</p>
            <p className="text-3xl underline pt-4">Follow Us</p>
          </div>
          <div className=" pb-10 pt-4 flex space-x-6">
            <img className="h-10" src="./Footer/SocialIcons-1.png" alt="insta" />
            <img className="h-10" src="./Footer/SocialIcons-2.png" alt="insta" />
            <img className="h-10" src="./Footer/SocialIcons-3.png" alt="insta" />
            <img className="h-10" src="./Footer/SocialIcons-4.png" alt="insta" />
          </div>
        </div>
        <ul className="text-white">
            <h1 className="underline text-3xl">Quick Links</h1>
            <li className="text-lg">Home</li>
            <li className="text-lg">Blogs</li>
            <li className="text-lg">About Us</li>
            <li className="text-lg">FAQs</li>
            <li className="text-lg">return Refund policy</li>
            <li className="text-lg">sitemap</li>
        </ul>
        <ul className="text-white">
            <h1 className="underline text-3xl">Legal</h1>
            <li className="text-lg">Privacy Policy</li>
            <li className="text-lg">terms and conditions</li>
        </ul>
        <ul className="text-white">
            <h1 className="underline text-3xl">Support</h1>
            <li className="text-lg">Sheikha@gmail.com</li>
        </ul>
        <ul className="text-white">
            <h1 className="underline text-3xl">Our Branches</h1>
            <li className="text-lg">Home</li>
            <li className="text-lg">Blogs</li>
            <li className="text-lg">About Us</li>
            <li className="text-lg">FAQs</li>
            <li className="text-lg">return Refund policy</li>
            <li className="text-lg">sitemap</li>
        </ul>
      </div>
      <div className="bg-[#0057A6]"> 
        <hr className="bg-[#ffff] border border-white h-0.5 ml-8 mr-5 hr"/>
        <p className="pb-16 text-xl text-white text-center pt-5"> Copyrights &copy; 2024 All Rights Reserved by Sheikha Fathima Zahara hospitals </p>
      </div>
    </div>
  );
};

export default Footer;
