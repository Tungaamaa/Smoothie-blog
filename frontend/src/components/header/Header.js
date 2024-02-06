import React, {useState} from "react";
import "./Header.css";
import { MdLocalDrink } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";

export const Header = () => {
  const [active, setActive] = useState('navBar'); 
  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  const removeNavbar = () => {
    setActive('navBar');
  }

  const { currentUser, signOut, userContextLoading } = useUserContext();
  const { setProducts } = useProductContext();

  const handleLogOut = () => {
    signOut();
    setProducts([]);
  }

  if (userContextLoading) {
    return <div>Loading...</div>;
  }
  if (!userContextLoading && currentUser) {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <MdLocalDrink className="icon" />
              Smoothie.
            </h1>
          </a>
        </div>
        <nav className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/recipes" className="navLink">Recipes</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Profile</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn" onClick={handleLogOut}>
            
            Logout
          
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar"> 
          <AiFillCloseCircle className="icon" />
          </div>
        </nav>

        <div onClick={showNav} className="toglleNavbar">
        <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <MdLocalDrink className="icon" />
              Smoothie.
            </h1>
          </a>
        </div>
        <nav className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/recipes" className="navLink">Recipes</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <li className="navItem">
              <a href="/sign-up" className="navLink">Sign-up</a>
            </li>

            <button className="btn">
            <a href="/sign-in">
            Login
            </a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar"> 
          <AiFillCloseCircle className="icon" />
          </div>
        </nav>

        <div onClick={showNav} className="toglleNavbar">
        <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};
