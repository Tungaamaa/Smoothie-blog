import React, { useEffect, useState } from "react";
import "./Product.css";
import { Header } from "../../components/header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EditProductModal } from "./EditProductModal";
import { DeleteProductModal } from "./DeleteProductModal";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import recipeVideo from "../../images/recipe.mp4";
import { Footer } from "../../components/footer/Footer";
import { Button} from "antd";

export const Product = () => {
  const { id } = useParams();

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const { currentUser, userContextLoading } = useUserContext();

  const { products, productContextLoading } = useProductContext();

  const product = products.find((product) => product._id === id);

  if (userContextLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div> item not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="section-title">
        <h3 className="title">Best Green Smoothie</h3>
        <div className="recipe-video">
   <video src={recipeVideo} loop autoPlay muted type="video/mp4"></video>
 </div>
      </div>

     <div >
     <div className="single-recipe-main">
     {product && (
       <div>
         <div className="single-recipe">
           <div className="single-recipe-content">
             <h3>{product.title}</h3>
             <p>I know that savory smoothie recipes aren’t the most popular kind to make but hear me out. You are never too old to try something new, and this may surprise you! I chose ingredients that are easy to find and blend well together. Here’s what I came up with:
            <li>
            - Water:
            </li>
            <li>
            - Raw cashews
            </li>
           <li>
           - Cauliflower florets
           </li>
            <li>
            - Frozen carrots
            </li>
            <li>
            - Celery
            </li>
            <li>
            - Green onion
            </li>
            <li>
            - Lemon
            </li>
            <li>
            - Sea salt and black pepper
            </li>
             Easy Ingredient Swaps
             
             I’m all for customizing this smoothie to fit my taste preferences. I love adding a little heat to savory smoothies and think hot sauce would be a great addition. You can also add in a premade mix like taco seasoning or the flavoring of your choice.
             
             Swap the cashews with the nut or seed of your choice. Feel free to add up to 1 cup of leafy greens.</p>
             <p>Ingredients : {product.description}</p>
           </div>
           <div className="single-recipe-image">
             <img className="individual-recipe-image" src={product.image} />
           </div>
         </div>
         <div className="single-recipe-buttons">
         <Button className="edit-button" onClick={handleOpenEdit}>edit</Button>
         <Button className="edit-button" onClick={handleOpenDelete}>delete</Button>
         </div>
        
       </div>
     )}
   </div>
 
  
     </div>
   

      <EditProductModal
        product={product}
        open={openEdit}
        handleClose={handleCloseEdit}
      />
      <DeleteProductModal open={openDelete} handleClose={handleCloseDelete} />

      <Footer/>
    </div>
  );
};
