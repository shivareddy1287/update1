const express = require("express");
const {
  applyLeaveCtrl,
  updateLeaveCtrl,
  approveLeaveCtrl,
  cancelLeaveCtrl,
  fetchAllLeaves,
  fetchLeave,
  deleteLeaveCtrl,
} = require("../../controllers/leave/leaveCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const leaveRoute = express.Router();

leaveRoute.post("/", authMiddleware, applyLeaveCtrl);
leaveRoute.put("/update/:id", updateLeaveCtrl);
leaveRoute.put("/:id", authMiddleware, approveLeaveCtrl);
leaveRoute.put("/cancelLeave/:id", cancelLeaveCtrl);
leaveRoute.get("/", fetchAllLeaves);
leaveRoute.delete("/:id", deleteLeaveCtrl);
leaveRoute.get("/:id", fetchLeave);

module.exports = leaveRoute;
