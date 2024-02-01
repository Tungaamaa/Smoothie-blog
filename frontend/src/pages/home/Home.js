import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homepage1 from "../../images/homepage1.jpeg";
import homepage2 from "../../images/homepage2.jpeg";
import homepage3 from "../../images/homepage3.avif";
import "./Home.css"
import { Header } from '../../components/header/Header';

export const Home = () => {
  return (
    <div>
    <Header/>

    <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={homepage1} class="d-block w-100" alt="..." />

      <div class="container">
      <div class="carousel-caption text-start">
        <h2>TAKE CARE OF YOUR BODY</h2>
        <p>
          Taking steps towards a healthier life starts right here with
          simple and tasty recipes that transform your body.
        </p>
        <p>
          <a
            class="homepage-button"
            href="categories"
            >
            <button>
            Discover Now
            </button></a
          >
        </p>
      </div>
    </div>


    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={homepage2} class="d-block w-100" alt="..."/>
      <div class="container">
      <div class="carousel-caption text-start">
        <h2>TAKE CARE OF YOUR BODY</h2>
        <p>
          Taking steps towards a healthier life starts right here with
          simple and tasty recipes that transform your body.
        </p>
        <p>
          <a
            class="btn btn-lg btn-primary mt-4 dis-small"
            href="categories"
            aria-label="Go to the content home section"
            >Discover Now</a
          >
        </p>
      </div>
    </div>

    </div>
    <div class="carousel-item">
      <img src={homepage3} class="d-block w-100" alt="..."/>
      <div class="container">
      <div class="carousel-caption text-start">
        <h2>TAKE CARE OF YOUR BODY</h2>
        <p>
          Taking steps towards a healthier life starts right here with
          simple and tasty recipes that transform your body.
        </p>
        <p>
          <a
            class="btn btn-lg btn-primary mt-4 dis-small"
            href="categories"
            aria-label="Go to the content home section"
            >Discover Now</a
          >
        </p>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    
    
    
    
    
    </div>
  )
}


// <div class="carousel-caption d-none d-md-block">
// <h5>First slide label</h5>
// <p>Some representative placeholder content for the first slide.</p>
// </div>