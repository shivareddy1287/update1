const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const leaveRoute = require("./routes/leave/leaveRoute");
const holidayRoute = require("./routes/holiday/holidayRoutes");
const dbConnect = require("./config/db/dbConnect");
const notificationRoute = require("./routes/notification/notificationRoute");
const hrLettersRoute = require("./routes/hrLetters/hrLettersRoute");

// routes 2
const userRoutes = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const assetRoutes = require("./routes/asset/assetRoute");
const benfitRoutes = require("./routes/benefit/benefitRoute");
const exitDetailsRoute = require("./routes/exitDetails/exitDetailsRoute");
const DepartmentRoutes = require("./routes/department/departmentRoute");
const DesignationRoutes = require("./routes/designation/designationRoute");
const TasksGivenRoutes = require("./routes/TasksGiven/TasksGivenRoute");

const app = express();

//configuraions  access
dotenv.config();

//DB
dbConnect();

//middleware
app.use(express.json());

//cors
app.use(cors());

app.use("/api/leave", leaveRoute);
app.use("/api/holiday", holidayRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/hr-letters", hrLettersRoute);

// routes2
app.use("/api/users", userRoutes);
app.use("/api/asset", assetRoutes);
app.use("/api/benefit", benfitRoutes);
app.use("/api/exitdetails", exitDetailsRoute);
app.use("/api/designation", DesignationRoutes);
app.use("/api/department", DepartmentRoutes);
app.use("/api/tasksgiven", TasksGivenRoutes);

// err handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running yes`));
//vnKBeqyIh7k3h23p
