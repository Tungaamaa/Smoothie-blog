import React from "react";
import video2 from "../../images/footer.mp4";
import { FiSend } from "react-icons/fi";
import { MdLocalDrink } from "react-icons/md";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small> KEEP IN TOUCH</small>
            <h2>Explore</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address"></input>
            <button className="btn flex" type="submit">
              SEND <FiSend />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link to="#" className="logo flex">
                <MdLocalDrink className="icon" />
                Smoothie.
              </Link>
            </div>
            <div className="footerParagraph">
            Experience a burst of freshness with our delectable smoothies! Crafted from the finest ingredients, each sip is a delightful journey of flavor and nourishment. Treat yourself to a taste sensation today!
            </div>
            <div className="footerSocials flex">
            <FaTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <FaInstagram className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
          <div className="linkGroup">
          <span className="groupTitle">
           Our Delicious smoothies
          </span>
          <li className="footerList flex">
          <FiChevronRight className="icon" />
          Ingredients
          </li>
          </div>
          </div>

          <div className="footerDiv flex">
          <small>BEST SMOOTHIE WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED</small>
          </div>
        </div>
      </div>
    </section>
  );
};
