import React, {useState} from 'react';
import { useUserContext } from '../../context/UserContext';
import axios from "axios";
import { Modal } from "../../components/modal/Modal";
import { Button, Form, Input } from "antd";

export const EditProfileModal = (props) => {
  const { open, handleClose } = props;
  const { updateUser, currentUser } = useUserContext();

  const [formValues, setFormValues] = useState({
    email: currentUser.user.email,
    username: currentUser.user.username,
    password: currentUser.user.password
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://smoothie-blog.vercel.app//account/editProfile`, formValues,
      {headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    }
      );

      const data = await response.data;
      updateUser(data)
      setFormValues({
        ...formValues,
        email: "",
        username: "",
        password: "",
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
    <h3>Edit Profile</h3>
    <Form.Item>
    <Input
    type="email"
    name="email"
    value={formValues.email}
    onChange={handleChange}
  />
    </Form.Item>
     <Form.Item>
     <Input
     type="text"
     name="username"
     value={formValues.username}
     onChange={handleChange}
   />
     </Form.Item>
     <Form.Item>
     <Input
     type="password"
     name="password"
     placeholder="current password"
     value={formValues.password}
     onChange={handleChange}
   />
     </Form.Item>
     <Form.Item>
     <Input
     type="password"
     name="password"
     placeholder="new password"
     value={formValues.password}
     onChange={handleChange}
   />
     </Form.Item>
     <Form.Item>
     <Input
     type="password"
     name="password"
    placeholder="confirm password"
     value={formValues.password}
     onChange={handleChange}
   />
     </Form.Item>
    
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSave}>Save</Button>
    </Form>
      
    </Modal>
    </div>
  )
}
