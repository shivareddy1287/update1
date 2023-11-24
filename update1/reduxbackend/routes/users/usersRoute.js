const express = require("express");
const {
  loginUserCtrl,
  userRegisterCtrl,
  fetchUsersCtrl,
  fetchUserDetails,
  updateUserctrl,
  deleteProfileCtrl,
  newHiresFetchCtrl,
  sendAutomatedEmail,
} = require("../../controllers/users/usersCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoutes = express.Router();

userRoutes.post("/sendAutomatedEmail", sendAutomatedEmail);

userRoutes.post("/register", userRegisterCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/", fetchUsersCtrl);

userRoutes.get("/:id", fetchUserDetails);
userRoutes.put("/update/:id", updateUserctrl);
userRoutes.delete("/delete/:id", deleteProfileCtrl);
userRoutes.get("/new/hires", newHiresFetchCtrl);
module.exports = userRoutes;
