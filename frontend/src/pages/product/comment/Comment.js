import { Avatar, Button, Card, Flex, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../../context/ProductContext";
import { useUserContext } from "../../../context/UserContext";


// import { EditComment } from "./EditComment";



export const Comment = (props) => {
 
  const { id } = useParams();

 
  const { products, productContextLoading, UPDATE_PRODUCT } =
    useProductsContext();
  const { currentUser } = useUserContext();
  



  const selectedProduct = products.find((product) => product._id === id);
 

  const sortedComments = selectedProduct?.comments?.sort(
    (comment1, comment2) => {
      return comment2.timeStamp - comment1.timeStamp;
    }
  );

  const createComment = async (values) => {
    console.log("Product-->values", values);

    try {
      const response = await axios.post(
        `http://localhost:8080/recipes/${id}/comments`,
        { comment: values.comment },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      const data = await response.data;

     
      UPDATE_PRODUCT(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
     
    </div>
  );
};