import React from "react";
import { footerlink } from "../../DataFolder/ListData";

function Footersec() {
  return (
    <footer className="footer_main">
      <div className="container">
        <div className="footer_top d-flex flex-column align-items-center">
          <ul>
            {footerlink.map((items) => (
              <li>
                <a href="/">{items}</a>
              </li>
            ))}
          </ul>
          <div className="footer_contact d-flex flex-wrap  col-lg-6 justify-content-lg-evenly justify-content-sm-center align-items-sm-center text-center ">
            <div className="footer_detail d-flex align-items-center gap-2 justify-content-center">
              <img src="./Icons/mail.png" alt="mail" />
              <a href="mailto:sales@lemolite.com">sales@lemolite.com</a>
            </div>
            <div className="footer_detail d-flex align-items-center gap-2 justify-content-center">
              <img src="./Icons/phone.png" alt="number" />
              <a href="tel:+91-9313834815">+91-9313834815</a>
            </div>
          </div>
        </div>
        <div className="footer_bottom d-flex flex-wrap justify-content-lg-between justify-content-sm-center align-items-center text-center">
          <span className="col-lg-4 col-sm-12 col-12 py-sm-2 py-2">
            Powered by Lemolite Technologies LLP
          </span>
          <span className="col-lg-4 col-sm-12 col-12 py-sm-2 py-2">
            © Logo 2024 All rights reserved
          </span>
          <ul className="col-lg-4 col-sm-12 col-12 py-sm-2">
            <li>
              <a href="/">
                <img src="./Icons/linkdin.png" alt="social img" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="./Icons/fb.png" alt="social" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="./Icons/insta.png" alt="social img" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="./Icons/twitterX.png" alt="social img" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footersec;
