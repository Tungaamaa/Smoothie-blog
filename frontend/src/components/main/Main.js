import React from "react";
import "./Main.css";
import img from "../../images/signup.jpeg";
import { MdOutlineLocalDrink } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Berry Blast Smoothie",
    location: "Detox Smoothies",
    grade: "cultural relax",
    fees: "8 reviews",
    description: "Start your day on a bright note with our Tropical Sunrise Smoothie, a refreshing blend of tropical fruits and creamy coconut goodness. This luscious smoothie combines the sweetness of ripe mangoes, tangy pineapple, and succulent papaya, balanced perfectly with a hint of zesty lime and a splash of coconut water..",
  },
  {
    id: 1,
    imgSrc: img,
    destTitle: "Tropical Sunrise Smoothie",
    location: "Fruit Smoothies",
    grade: "cultural relax",
    fees: "8 reviews",
    description: "hsbjdh hsadbhja hsbadjhdaj.",
  },
  {
    id: 1,
    imgSrc: img,
    destTitle: "Green Goddess Smoothie",
    location: "Green Smoothies",
    grade: "cultural relax",
    fees: "8 reviews",
    description: "hsbjdh hsadbhja hsbadjhdaj.",
  },
  {
    id: 1,
    imgSrc: img,
    destTitle: "Mango Tango Smoothie",
    location: "Protein Smoothies",
    grade: "cultural relax",
    fees: "8 reviews",
    description: "hsbjdh hsadbhja hsbadjhdaj.",
  },
  {
    id: 1,
    imgSrc: img,
    destTitle: "Peanut Butter Power Smoothie",
    location: "Antioxidant-Rich Smoothies",
    grade: "cultural relax",
    fees: "8 reviews",
    description: "hsbjdh hsadbhja hsbadjhdaj.",
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
