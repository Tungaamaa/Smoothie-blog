import React from "react";

import "./Header.scss";
import { MdLocalDrink } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export const Header = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              <MdLocalDrink className="icon" />
              Smoothie.
            </h1>
          </a>
        </div>
        <nav className="navbar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Recipes</a>
            </li>

            <li>
              <a href="#" className="navLink">Profile</a>
            </li>

            <li>
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
            <a href="#">
            Login
            </a>
            </button>
          </ul>

          <div className="closeNavbar"> 
          <AiFillCloseCircle className="icon" />
          </div>
        </nav>

        <div className="toglleNavbar">
        <TbGridDots className="icon"/>
        </div>
       
       
      
      </header>
    </section>
  );
};
