import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export const SignIn = () => {
  const { signIn } = useUserContext();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/sign-in",
        formValues
      );

      const user = await response.data;

      localStorage.setItem("user", JSON.stringify(user));

      signIn(user);
      setFormValues({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="sign-up-page-container">
        <div className="sign-up-page-forms-container">
          <div className="sign-up-page-content">
            <div className="sign-up-page">
              <h2 className="title">Sign in</h2>

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
                onClick={handleSignIn}
                className="btn"
                value="Login"
              ></input>
              <p className="social text">Or Sign in with social platforms</p>
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
