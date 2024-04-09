import React, { useState } from "react";
import { useUserContext } from "../../../context/UserContext";
import { useProductContext } from "../../../context/ProductContext";
import axios from "axios";
import { Modal } from "../../../components/modal/Modal";
import { Button, Form } from "antd";


export const UpdateComment = ({
  open,
  handleClose,
  workoutId,
  comment,
}) => {
  const [modalLoading, setModalLoading] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.comment);
  const { UPDATE_PRODUCT } = useProductContext();
  const { currentUser } = useUserContext();

  const handleCancelUpdateComment = () => {
    handleClose();
  };

  const onFinish = async () => {
    try {
      setModalLoading(true);
      const response = await axios.put(
        `https://smoothie-blog.onrender.com//workouts/${workoutId}/comments/${comment._id}`,
        {
          comment: updatedComment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      const data = await response.data;
      UPDATE_PRODUCT(data);
      setModalLoading(false);
      handleClose();
    } catch (error) {
      setModalLoading(false);
    }
  };

  return (
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
          name="basic"
          initialValues={{ comment: comment.comment }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Comment"
            name="comment"
            rules={[{ required: true, message: "Please input your comment!" }]}
          >
            <input
              type="text"
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Update
            </Button>
            <Button
              type="default"
              onClick={handleCancelUpdateComment}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};