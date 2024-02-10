import React from "react";
import "./Main.css";
import img1 from "../../images/signup.jpeg";
import img2 from "../../images/homepage1.jpeg";
import img3 from "../../images/s2.jpeg";
import img4 from "../../images/homepage2.jpeg";
import img5 from "../../images/homepage3.avif";
import img6 from "../../images/s1.jpeg";


import { MdOutlineLocalDrink } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Berry Blast Smoothie",
    location: "Detox Smoothies",
    grade: "Fiber Content",
    fees: "8 reviews",
    description: "Start your day on a bright note with our Tropical Sunrise Smoothie, a refreshing blend of tropical fruits and creamy coconut goodness.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Tropical Sunrise Smoothie",
    location: "Fruit Smoothies",
    grade: "Protein Content",
    fees: "7 reviews",
    description: "This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Green Goddess Smoothie",
    location: "Green Smoothies",
    grade: "Sugar Content",
    fees: "2 reviews",
    description: "This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Mango Tango Smoothie",
    location: "Protein Smoothies",
    grade: "Caloric Content",
    fees: "9 reviews",
    description: "This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Peanut Butter Power Smoothie",
    location: "Antioxidant-Rich Smoothies",
    grade: "Caloric Content",
    fees: "3 reviews",
    description: "This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Peanut Butter Power Smoothie",
    location: "Antioxidant-Rich Smoothies",
    grade: "Overall Balance",
    fees: "5 reviews",
    description: "This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water",
  },
];

export const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most searched recipes</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <MdOutlineLocalDrink className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                  <p>{description}</p>
                  </div>
                  <button className="btn flex">
                  DETIALS<CgDetailsMore className="icon"/>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
