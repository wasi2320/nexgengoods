import React from "react";
import { footer, footerTouch, nav, socialIcon } from "../data/Data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">
            Have questions or need assistance? We’re here to help! Feel free to reach out to us at any time.
            </p>
            {footerTouch.map((val, index) => (
              <p className="mb-2" key={index}>
                {val.icon}
                {val.contact}
              </p>
            ))}
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              {footer.map((val, index) => (
                <div className="col-md-4 mb-5" key={index}>
                  <h5 className="text-secondary text-uppercase mb-4">
                    {val.header}
                  </h5>
                  <div className="d-flex flex-column justify-content-start">
                    {nav.map((val, item) => (
                      <Link className="text-secondary mb-2" href="#" key={item}>
                        <i className="fa fa-angle-right mr-2"></i>
                        {val.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Newsletter
                </h5>
                <p>Subscribe to our newsletter for the latest updates, exclusive offers, and more. Don’t miss out on what’s new at Next Gen!</p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                <div className="d-flex">
                  {socialIcon.map((icon, index) => (
                    <a
                      className="btn btn-primary btn-square mr-2"
                      href="#"
                      key={index}
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
