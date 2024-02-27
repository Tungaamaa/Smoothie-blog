import React, { useEffect, useState } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { Header } from "../../components/header/Header";
import { CreateProductModal } from "./CreateProductModal";
import { MdOutlineLocalDrink } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { Footer } from "../../components/footer/Footer";
import { Button} from "antd";

export const Products = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { products } = useProductContext();
  console.log(products);
  if (!products) {
    return <div>products not found </div>;
  }

  return (
    <div>
      <Header />
    
      <section className="main container section">
      <div className="search-bar">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
      />
    </div>
        <div className="secTitle">
     
          <div >
            <div >
              <Button
                className="create-new-product-button"
                onClick={handleOpen}
              >
                Create a new recipe
              </Button>
            </div>
          </div>
          <div className="secContent grid">
            {products &&
              products.map((product) => (
                <div
                  className="singleDestination"
                  key={product._id}
                  onClick={() => navigate(`/recipes/${product._id}`)}
                >
                <div className="imageDiv">
                    <img  src={product.image} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{product.title}</h4>
                    <span className="continent flex">
                      <MdOutlineLocalDrink className="icon" />
                      <span className="name">Detox Smoothies</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>
                        Fiber Content
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>8 reviews</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{product.description}</p>
                    </div>
                    <button className="btn flex">
                      DETIALS
                      <CgDetailsMore className="icon" />
                    </button>
                  </div>
                  
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer/>
      <CreateProductModal open={open} handleClose={handleClose} />
    </div>
  );
};
