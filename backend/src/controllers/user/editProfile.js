const validator = require("validator");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

const EditProfile = async (req, res) => {
  const { email, password, newEmail, newPassword, } = req.body;

  if (!email || !password || !newPassword || !newEmail) {
    res.status(400).json({
      message: "Email, password, new email, and new password are required",
    });
    return;
  }

  try {
    const user = await User.findOne({ email });
   

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    if (!validator.isEmail(newEmail)) {
      res.status(400).json({ message: "Email is invalid" });
      return;
    }

    if (!validator.isStrongPassword(newPassword)) {
      res.status(400).json({
        message:
          "Password is not strong enough!, Please include at least 8 character including one upper case, one lower case, one symbol, one number, and no space",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.email = newEmail;
    user.password = hashedPassword;

    const updatedUser = await user.save();
    res.status(200).json({
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { EditProfile };