import React, { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import { Button, Form, Input } from "antd";

export const EditProductModal = (props) => {
  const { open, handleClose, product } = props;
  const { id } = useParams();
  const {currentUser, userContextLoading } = useUserContext();
  const { UPDATE_PRODUCT } = useProductContext();

  const [formValues, setFormValues] = useState({
    title: product.title,
    description: product.description,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://smoothie-blog.onrender.com/recipes/${id}`, formValues,
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
      <Form>
      <h3>Edit Product</h3>
      <Form.Item>
      <Input
      type="text"
      name="title"
      value={formValues.title}
      onChange={handleChange}
    />
      </Form.Item>
       <Form.Item>
       <Input
       type="text"
       name="description"
       value={formValues.description}
       onChange={handleChange}
     />
       </Form.Item>
      
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </Form>
        
      </Modal>
    </div>
  );
};
