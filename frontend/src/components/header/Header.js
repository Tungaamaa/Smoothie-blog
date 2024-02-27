import React, {useState} from "react";
import "./Header.css";
import { MdLocalDrink } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

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
          <Link to="/" className="logo flex">
            <h1>
              <MdLocalDrink className="icon" />
              Smoothie.
            </h1>
          </Link>
        </div>
        <nav className={active}>
          <ul className="navLists flex">
            <li className="navItem">
            <Link to="/recipes" className="navLink">Recipes</Link>
            </li>

            <li className="navItem">
              
              <Link to="/profile" className="navLink">Profile</Link>
            </li>

            <li className="navItem">
            
              <Link to="#" className="navLink">Contact</Link>
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
          <Link to="/" className="logo flex">
            <h1>
              <MdLocalDrink className="icon" />
              Smoothie.
            </h1>
          </Link>
        </div>
        <nav className={active} >
          <ul className="navLists flex">
            <li className="navItem">
            <Link to="/recipes" className="navLink">Recipes</Link>
            </li>

            <li className="navItem">
            <Link to="#" className="navLink">Contact</Link>
            </li>

            <li className="navItem">
            <Link to="#" className="navLink">About Us</Link>
            </li>

            <button className="btn">
            <Link to="/sign-in">
            Login
            </Link>
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
