import React from "react";
import "./Header.css";
import { MdLocalDrink } from "react-icons/md";


export const Header = () => {
  return (
    <div>
      <header>
        <i className="logo">
        
        <MdLocalDrink/>
        </i>
        <nav>
          <ul className="nav-links">
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <a className="cta">
          <button>Login</button>
        </a>
      </header>
    </div>
  );
};
