import React, { useState } from "react";
import { useUserContext } from "../../../context/UserContext";
import { useProductContext } from "../../../context/ProductContext";
import axios from "axios";
import { Modal } from "../../../components/modal/Modal";
import { Button, Form } from "antd";

export const DeleteComment = ({
  open,
  handleClose,
  productId,
  commentId,
}) => {
  const [modalLoading, setModalLoading] = useState(false);
  const { UPDATE_PRODUCT } = useProductContext();
  const { currentUser } = useUserContext();

  const handleCancelDeleteComment = () => {
    handleClose();
  };

  const onFinish = async () => {
    try {
      setModalLoading(true);
      const response = await axios.delete(
        `https://smoothie-blog.onrender.com//recipes/${productId}/comments/${commentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      const data = await response.data;
      UPDATE_PRODUCT(data);
      console.log(data)
      setModalLoading(false);
      handleClose();
    } catch (error) {
      setModalLoading(false);
    }
  };

  return (
    <div>
      <Modal open={open} handleClose={handleClose}>
        {modalLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading....
          </div>
        ) : (
          <Form
            onFinish={onFinish}
            autoComplete="off"
            name="normal_login"
            className="login-form"
          >
            Are you sure you want to delete this workout comment?
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <Button
                htmlType="button"
                onClick={handleCancelDeleteComment}
                className="login-form-button"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Delete
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
};