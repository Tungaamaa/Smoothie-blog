import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useUserContext();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://smoothie-blog.onrender.com//users/sign-up",
        formValues
      );

      const user = await response.data;

      localStorage.setItem("user", JSON.stringify(user));
      signUp(user);
      setFormValues({
        username: "",
        email: "",
        password: "",
      });

      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 409) {
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="sign-up-page-container">
        <div className="sign-up-page-forms-container">
          <div className="sign-up-page-content">
            <div className="sign-up-page">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i>
                  <FaUser />
                </i>
                <input
                  type="text"
                  name="username"
                  value={formValues.username}
                  onChange={handleInput}
                  placeholder="Username"
                ></input>
              </div>
              <div className="input-field">
                <i>
                  <FaEnvelope />
                </i>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInput}
                  placeholder="Email"
                ></input>
              </div>
              <div className="input-field">
                <i>
                  <FaLock />
                </i>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInput}
                  placeholder="Password"
                ></input>
              </div>
              <input
                type="submit"
                onClick={handleSubmit}
                className="btn"
                value="Sign Up"
              ></input>
              <p className="social text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="https://" className="social-icon">
                  <i>
                    <FaFacebook />
                  </i>
                </a>
                <a href="https://" className="social-icon">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a href="https://" className="social-icon">
                  <i>
                    <FaGoogle />
                  </i>
                </a>
                <a href="https://" className="social-icon">
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="panels-container">
          <div className="container-before"></div>
        </div>
      </div>
    </div>
  );
};
