import React, { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";

export const EditProductModal = (props) => {
  const { open, handleClose, product } = props;
  const { id } = useParams();
  const {currentUser, userContextLoading } = useUserContext();
  const { UPDATE_PRODUCT } = useProductContext();

  const [formValues, setFormValues] = useState({
    name: product.title,
    description: product.description,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/recipes/${id}`, formValues,
      {headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    }
      );

      const data = await response.data;
      UPDATE_PRODUCT(data)
      setFormValues({
        ...formValues,
        title: "",
        description: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Modal open={open} handleClose={handleClose}>
        <h3>Edit Product</h3>
        <input
          type="text"
          name="name"
          value={formValues.title}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="description"
        />
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </Modal>
    </div>
  );
};
