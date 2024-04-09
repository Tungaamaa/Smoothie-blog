import React from "react";
import { Modal } from "../../components/modal/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import { Button} from "antd";

export const DeleteProductModal = (props) => {
  const navigate = useNavigate();
  const { open, handleClose } = props;
  const { id } = useParams();
  const { currentUser} = useUserContext();
  const { DELETE_PRODUCT } = useProductContext();

  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(
        `https://smoothie-blog.vercel.app//recipes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      const data = await response.data;
      DELETE_PRODUCT(data._id);

      handleClose();
      navigate("/recipes")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Modal open={open} handleClose={handleClose}>
        <h3>Are you sure you want to delete this product?</h3>

        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteProduct}>Delete</Button>
      </Modal>
    </div>
  );
};
