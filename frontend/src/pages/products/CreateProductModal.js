import React, { useState } from 'react';
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";

const plainOptions = ["private", "public"];

export const CreateProductModal = (props) => {

    const [file, setFile] = useState();
    const { open, handleClose } = props;
  
    const [type, setType] = useState("public");
    const { currentUser } = useUserContext();
    const { CREATE_PRODUCT } = useProductContext();
  
    const [formValues, setFormValues] = useState({
      title: "",
      description: "",
      image: "",
    });
   

  return (
    <div>CreateProductModal</div>
  )
}
