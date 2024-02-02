import React from "react";
import "./Home.css";
import { Header } from "../../components/header/Header";
import video1 from "../../images/home2.mp4";
import video2 from "../../images/home1.mp4";


export const Home = () => {
  return (
    <div>
      <Header />
   <video src={video1}  muted autoPlay loop type="video/mp4"></video>
   <video src={video2}  muted autoPlay loop type="video/mp4"></video>
    </div>
  );
};
