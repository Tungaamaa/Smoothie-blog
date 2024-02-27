import React, { useEffect, useState } from "react";
import "./Product.css";
import { Header } from "../../components/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { EditProductModal } from "./EditProductModal";
import { DeleteProductModal } from "./DeleteProductModal";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import recipeVideo from "../../images/recipe.mp4";
import { Footer } from "../../components/footer/Footer";
import { Button } from "antd";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { DeleteComment } from "./comment/DeleteComment";

export const Product = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const [commentId, setCommentId] = useState("");
  const [openDeleteCommentModal, setOpenDeleteCommentModal] = useState(false);
  const handleOpenDeleteCommentModal = () => setOpenDeleteCommentModal(true);
  const handleCloseDeleteCommentModal = () => setOpenDeleteCommentModal(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const { currentUser } = useUserContext();

  const { products, productContextLoading, UPDATE_PRODUCT } =
    useProductContext();

  const product = products.find((product) => product._id === id);

  const handleDeleteComment = async (commentId) => {
    setCommentId(commentId);
    handleOpenDeleteCommentModal();
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!comment) {
      alert("Please enter a comment");
    } else {
      const response = await axios.post(
        `http://localhost:8080/recipes/${id}/comments`,
        {
          comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      UPDATE_PRODUCT(data);
      setComment("");
    }
  };

  if (productContextLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div> item not found</div>;
  }
  console.log(product);
  return (
    <div>
      <Header />
      <div className="section-title">
        <h3 className="title">Best Green Smoothie</h3>
        <div className="recipe-video">
          <video src={recipeVideo} loop autoPlay muted type="video/mp4"></video>
        </div>
      </div>

      <div>
        <div className="single-recipe-main">
          {product && (
            <div>
              <div className="single-recipe">
                <div className="single-recipe-content">
                  <h3>{product.title}</h3>
                  <p>
                    I know that savory smoothie recipes aren’t the most popular
                    kind to make but hear me out. You are never too old to try
                    something new, and this may surprise you! I chose
                    ingredients that are easy to find and blend well together.
                    Here’s what I came up with:
                    <li>- Water:</li>
                    <li>- Raw cashews</li>
                    <li>- Cauliflower florets</li>
                    <li>- Frozen carrots</li>
                    <li>- Celery</li>
                    <li>- Green onion</li>
                    <li>- Lemon</li>
                    <li>- Sea salt and black pepper</li>
                    Easy Ingredient Swaps I’m all for customizing this smoothie
                    to fit my taste preferences. I love adding a little heat to
                    savory smoothies and think hot sauce would be a great
                    addition. You can also add in a premade mix like taco
                    seasoning or the flavoring of your choice. Swap the cashews
                    with the nut or seed of your choice. Feel free to add up to
                    1 cup of leafy greens.
                  </p>
                  <p>Ingredients : {product.description}</p>
                </div>
                <div className="single-recipe-image">
                  <img
                    className="individual-recipe-image"
                    src={product.image}
                  />
                </div>
              </div>
              <div className="single-recipe-buttons">
                <Button className="btn" onClick={handleOpenEdit}>
                  edit
                </Button>
                <Button className="btn" onClick={handleOpenDelete}>
                  delete
                </Button>
              </div>
            </div>
          )}

          <h3>Reviews</h3>
          {product.comments.map((comment, i) => {
            return (
              <div key={i} className="comments">
                <div className="comments-section">
                  <b>
                    <p className="single-comment">{comment.user.email} :</p>
                  </b>
                  <p>{comment.comment}</p>
                </div>
                <Button className="btn">
                  <CiEdit />
                </Button>
                <Button className="btn"
                onClick={() => handleDeleteComment(comment._id)}>
                  <FaDeleteLeft />
                </Button>
              </div>
            );
          })}

          <div className="comment-section">
            <h3>Add Review</h3>
            <form>
              <textarea
                className="comment-input"
                placeholder="Add Review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button className="btn" onClick={handleAddComment}>
                Add
              </Button>
            </form>
          </div>
        </div>
      </div>

      <EditProductModal
        product={product}
        open={openEdit}
        handleClose={handleCloseEdit}
      />
      <DeleteProductModal open={openDelete} handleClose={handleCloseDelete} />
      <DeleteComment
        open={openDeleteCommentModal}
        handleClose={handleCloseDeleteCommentModal}
        productId={id}
        commentId={commentId}
      />

      <Footer />
    </div>
  );
};
