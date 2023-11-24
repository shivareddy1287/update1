const generateToken = require("../../config/token/generateToken");
const User = require("../../model/user/User");

const expressAsyncHandler = require("express-async-handler");
const validateMongodbID = require("../../utils/validateMongodbID");

// Send Automated emails
const sendAutomatedEmail = expressAsyncHandler(async (req, res) => {
  const { subject, send_to, reply_to, template, url } = req.body;

  if (!subject || !send_to || !reply_to || !template) {
    res.status(500);
    throw new Error("Missing email parameter");
  }

  // Get user
  const user = await User.findOne({ email: send_to });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const sent_from = process.env.EMAIL_USER;
  const name = user.name;
  const link = `${process.env.FRONTEND_URL}${url}`;

  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      name,
      link
    );
    res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

//----------------------------------------------------------------
// Register
//----------------------------------------------------------------

const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
  // Business Logic

  const userExists = await User.findOne({ email: req?.body?.email });
  if (userExists) throw new Error("User already exists");

  try {
    const user = await User.create({
      ...req?.body,
    });
    res.json(user);

    // res.json("user controllers");
  } catch (error) {
    res.json(error);
  }
});
//----------------------------------------------------------------
// Login User
//----------------------------------------------------------------

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // const user = await User.findOne({ email });
  // console.log(req?.body?.email, "user login");
  // if (!user) {
  //   throw new Error("Login Credentials are not valid");
  // }
  // res.json("user login");

  // if user exists
  console.log("11");

  const userFound = await User.findOne({ email });
  if (userFound?.isBlocked)
    throw new Error("Access Denied You have been blocked");

  // check if password is match
  if (userFound && (await userFound.isPasswordMatched(password))) {
    console.log("userFound, ", userFound.populate("notifications"));

    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      profilePhoto: userFound?.profilePhoto,
      isAdmin: userFound?.isAdmin,
      basicInformation: userFound?.basicInformation,
      token: generateToken(userFound?._id),
    });
  } else {
    console.log("err");
    res.status(401);
    throw new Error("Invalid login credentials");
  }
});
//----------------------------------------------------------------
// Fetch Users
//----------------------------------------------------------------

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({})
      .populate("addedBy")
      .populate("ModifiedBy")
      .populate("userDocuments");
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

//----------------------------------------------------------------
// user details
//----------------------------------------------------------------

const fetchUserDetails = expressAsyncHandler(async (req, res) => {
  // console.log(req.headers);
  const { id } = req.params;
  validateMongodbID(id);

  try {
    const user = await User.findById(id)
      .populate("addedBy")
      .populate("ModifiedBy")
      .populate("leaves")
      .populate("userDocuments");
    // .populate("notifications");
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

//----------------------------------------------------------------
// Update profile
//----------------------------------------------------------------

const updateUserctrl = expressAsyncHandler(async (req, res) => {
  console.log(req?.params?.id, "params");
  // const { _id } = req?.user;
  // console.log(_id, "_id");

  // validateMongodbID(_id);
  try {
    const user = await User.findByIdAndUpdate(
      req?.params?.id,
      {
        ...req?.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------------------------
// delete the user
//----------------------------------------------------------------

const deleteProfileCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  console.log(id);
  // if (!id) throw new Error("Please provide user ID");

  // check isf user id is valid
  // validateMongodbID(id);
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//----------------------------------------------------------------
// Fetch New Hires
//----------------------------------------------------------------

const newHiresFetchCtrl = expressAsyncHandler(async (req, res) => {
  console.log("fetch new hires");
  try {
    // const users = await User.find({})
    //   .populate("addedBy")
    //   .populate("ModifiedBy");
    // res.json(users);

    const currentDate = new Date();
    const newHireCutoff = new Date(); // Define the cutoff date (e.g., 30 days ago)
    newHireCutoff.setDate(newHireCutoff.getDate() - 30);
    console.log(currentDate, "currentDate date");
    console.log(newHireCutoff, "newHireCutoff");
    const newHires = await User.find({
      // hireDate: { $gte: newHireCutoff, $lte: currentDate },
      "workInformation.dateOfJoining": {
        $gte: newHireCutoff,
        $lte: currentDate,
      },
    })
      .populate("addedBy")
      .populate("ModifiedBy");
    // const oldEmployees = await User.find({
    //   "workInformation.dateOfJoining": { $lt: newHireCutoff },
    // })
    //   .populate("addedBy")
    //   .populate("ModifiedBy");

    res.json(newHires);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  loginUserCtrl,
  userRegisterCtrl,
  fetchUsersCtrl,
  fetchUserDetails,
  updateUserctrl,
  deleteProfileCtrl,
  newHiresFetchCtrl,
  sendAutomatedEmail,
};
