import React from "react";
import { useUserContext } from "../../context/UserContext";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./Profile.css";
import profile from "../../images/profile.jpeg";
import { Button} from "antd";
import { EditProfileModal } from "./EditProfile";

export const Profile = () => {
  const { currentUser } = useUserContext();

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  return (
    <div>
      <Header />
  <div className="section-title">
  <h3>
  Hello! {currentUser.user.username}
  </h3>
  </div>
      <div>
        <div className="profile-container">
          <div>
            <img src={profile} alt="Profile Image" class="profile-image" />
            <span className="profile-edit-button">
              <Button className="edit-button" onClick={handleOpenEdit} >Edit profile</Button>
            </span>
          </div>

          <div class="username">Email:{currentUser.user.email}</div>
          <div class="email">Username:{currentUser.user.username}</div>
        </div>
      </div>
      <EditProfileModal
      currentUser={currentUser}
      open={openEdit}
      handleClose={handleCloseEdit}
    />

      <Footer />
    </div>
  );
};
