import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { Button, Form, Input, Radio } from "antd";
import { Modal } from "../../components/modal/Modal";


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
  const onChangeType = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const downloadImageUrl = await getDownloadURL(storageRef);

    return downloadImageUrl;
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage(file);
      console.log(imageUrl);
      const response = await axios.post(
        "https://smoothie-blog.onrender.com/recipes",
        { ...formValues, image: imageUrl, type: type },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      const data = await response.data;
      CREATE_PRODUCT(data);

      setFormValues({
        title: "",
        description: "",
        imageUrl: "",
      });

      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Modal open={open} handleClose={handleClose}>
        <div >
          <div >
            <h3>Create a new recipe</h3>
            <Form>
            <Form.Item>
            <Input
            type="text"
            name="title"
            value={formValues.title}
            placeholder="enter your recipe title"
            onChange={handleChange}
            />
            </Form.Item>

             <Form.Item>
             <Input
             type="text"
             name="description"
             value={formValues.description}
             onChange={handleChange}
             placeholder="enter your recipe"
             />
             </Form.Item>
             <Form.Item>
            <Input
            type="file"
             placeholder="enter your image"
             name="image"
             onChange={handleFileChange}
            />
             </Form.Item>
              <Form.Item>
              <Radio.Group
              options={plainOptions}
              onChange={onChangeType}
              value={type}
              optionType="button"
              buttonStyle="solid"
            />
              </Form.Item>
            
              <div>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </Form>
          
          </div>
        </div>
      </Modal>
    </div>
  );
};


