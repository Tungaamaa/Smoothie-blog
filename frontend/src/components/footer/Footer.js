import React from 'react';
import video2 from "../../images/home4.mp4";
import { FiSend } from "react-icons/fi";

export const Footer = () => {
  return (
   <section className="footer">
   <div className="videoDiv">
   <video src={video2} loop autoPlay muted type="video/mp4">
   </video>
   </div>

   <div className="secContent container">
   <div className='contactDiv flex'>
    <div className="text">
    <small> KEEP IN TOUCH
    </small>
    <h2>EXplore
    </h2>
    </div>
    <div className="inputDiv flex">
    <input type="text" placeholder='Enter Email Address'></input>
    <button className='btn flex' type='submit'>
    SEND <FiSend />
    </button>
    </div>
   </div>
   </div>
   </section>
  )
}
