import React from "react";
import "./Home.css";
import { Header } from "../../components/header/Header";
import { GiDrinkMe } from "react-icons/gi";
import video1 from "../../images/home3.mp4";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { TbApps } from "react-icons/tb";
import { Main } from "../../components/main/Main";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <section className="home">
        <div className="overlay"></div>

        <video src={video1} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Sip, Smile, Repeat...</span>
            <h1 className="homeTitle">Search for your favorite Smoothie</h1>
          </div>

          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Filter by Ingredients:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name ingredients ..." />
                <GiDrinkMe className="icon"/>
              </div>
            </div>
            <div className="dateInput">
            <label htmlFor="date">Nutritional Information:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter nutrition here ..." />
              <GiDrinkMe className="icon"/>
            </div>
          </div>
          <div className="priceInput">
          <div className="label_total flex">
          <label htmlFor="price">Max Rating and Reviews:
          </label>
          <h3 className="total">10 stars</h3>
          </div>
          <div className="input flex">
          <input type="range" max="10" min="1"/>
          </div>
        </div>
          <div className="searchOptions flex">
          <HiFilter className="icon" />
          <span>MORE FILTERS</span>
          </div>
          </div>

          <div className="homeFooterIcons flex">
          <div className="rightIcons">
          <FiFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <CiLinkedin className="icon"/>

          </div>
          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>

          </div>
          </div>
        </div>
      </section>
      <Main/>
      <Footer/>
    </div>
  );
};
