import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import ftimg from "../assets/footerimg.png"

const Footer = () => {
  return (
    <>


      <footer className="lp-footer">
        <div className="container-fluid bg-dark-blue">
          <div className="container">
            <div className="lp-footer__main d-flex flex-column flex-lg-row justify-content-lg-between">
              <div className="d-block d-lg-flex">
                {/* Footer Logo */}
                <div className="lp-footer__image">
                  <img
                    alt="Liberty Bank: Be Community Kind"
                    src={ftimg}
                  />
                </div>

                {/* Footer Links */}
                <div className="lp-footer__links">
                  <ul className="list-group ">

                    <div className='groupy' >
                    <div className='sameClassFooter' >
                      <li className="list-group-item">
                       Personal
                      </li>
                      <li className="list-group-item">
                      Business
                      </li>
                      <li className="list-group-item">
                       Investing
                      </li>
                    </div>
                    <div className='sameClassFooter' >
                      <li className="list-group-item">
                      Learning Center
                      </li>
                      <li className="list-group-item">
                       Liberty &amp; Community
                      </li>
                      <li className="list-group-item">
                       Find A Branch
                      </li>
                    </div>

                    <div className='sameClassFooter'>
                      <li className="list-group-item">
                      Careers
                      </li>
                      <li className="list-group-item">
                       Contact Us
                      </li>
                    </div>
                    </div>


                  </ul>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="row p-0 my-auto">
                <div className="col-12 lp-footer__social d-flex flex-row justify-content-between">
                  <a href="https://twitter.com/LibertyBank_CT" target="_blank" aria-label="Twitter">

                  </a>
                  <a href="https://www.facebook.com/Liberty" target="_blank" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.youtube.com/channel/UCt_Ho1iY_ue9u-E0K_0GLgw" target="_blank" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                  <a href="https://www.instagram.com/libertybankct/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/company/liberty-bankct/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
                {/* Mobile App Download Button */}
                <a href="/personal/personal-digital-banking#mobile" className="btn btn-outline-white" target="_blank">
                  Download our Mobile App <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="container-fluid bg-darkest-blue">
          <div className="container">
            <div className="lp-footer__sub">
              {/* Routing Number */}
              <div className="lp-footer__routing-number">Routing Number: 211170282</div>

              {/* Additional Links */}
              <div className="lp-footer__links">
                <ul>
                  <li>
                    <a href="/utility/privacy-security">Privacy &amp; Security</a>
                  </li>
                  <li>
                    <a href="/utility/terms-conditions">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/utility/accessibility">Accessibility</a>
                  </li>
                  <li>
                    <a href="/utility/sitemap">Site Map</a>
                  </li>
                </ul>
              </div>

              {/* Legal Information */}
              <div className="lp-footer__fdic">
                <ul>
                  <li>Member FDIC</li>
                  <li className="ehl-icon">&nbsp;&nbsp;Equal Housing Lender</li>
                </ul>
              </div>

              {/* NMLS Info */}
              <div className="lp-footer__nmls">NMLS #459028</div>

              {/* Copyright */}
              <div className="lp-footer__copy">© Liberty Bank 2025 All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
