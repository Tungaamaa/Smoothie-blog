import React, { useEffect, useState } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { Header } from "../../components/header/Header";
import { CreateProductModal } from "./CreateProductModal";


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
    <Header/>
    <section className="home">
    <div className="products-page-content">
    <div className="products-page-top">
      <h1>Delicious Smoothie Recipes</h1>
    </div>
    <div className="search-bar">
      <input type="search" placeholder="Search" className="search-input" />
    </div>
    <div className="products-page-products-container">
      <div className="create-new-product-container">
        <button className="create-new-product-button" onClick={handleOpen}>Create new product</button>
      </div>
    </div>
    <div className="products-page-main">
      {products &&
        products.map((product) => (
          <div
            className="products-individual"
            key={product._id}
            onClick={() => navigate(`/products/${product._id}`)}
          >
            <div className="recipes">
              <div className="recipes-content">
                <h4 className="type">visibility:{product.type}</h4>

                <h3>Recipe name: {product.title}</h3>
                <p>Ingredients:{product.description}</p>
              </div>
              <div className="recipes-image">
                <img className="recipe-image" src={product.image} />
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
    
    </section>
    <CreateProductModal open={open} handleClose={handleClose} />
      
   
    </div>
  );
};
