const express = require("express");
const {
  addNotificationCtrl,
  fetchNotificationsCtrl,
} = require("../../controllers/notification/notificationCtrl");

const notificationRoute = express.Router();

notificationRoute.post("/", addNotificationCtrl);
notificationRoute.get("/", fetchNotificationsCtrl);

module.exports = notificationRoute;
