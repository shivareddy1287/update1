const expressAsyncHandler = require("express-async-handler");
const Leave = require("../../model/leave/Leave");
const Notification = require("../../model/notification/notification");
const User = require("../../model/user/User");

const applyLeaveCtrl = expressAsyncHandler(async (req, res) => {
  // console.log(req.user);
  // console.log("apply leave triggered");
  const userId = req.user._id;

  const employeeIdd = req.body.employeeId;
  console.log("employeeId", employeeIdd);

  const user = await User.findById(employeeIdd);
  console.log("userr", user);
  // console.log(req.body);

  const notificationData = {
    employeeId: req.body.employeeId,
    employeeName: `${user.basicInformation.firstName} ${user.basicInformation.lastName}`,
    notificationTitle: `Applied ${req.body.leaveType}`,
    notificationDescription: `Applied  ${req.body.leaveType}  for ${req.body.fromDate} to ${req.body.toDate}`,
    user: req.body.askLeaveFor,
  };

  const notification = await Notification.create(notificationData);

  try {
    const leave = await Leave.create({
      ...req.body,
      // user: ObjectId(req.body.user),
      user: req.body.employeeId,
      appliedBy: userId,
    });

    res.json(leave);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const updateLeaveCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  // console.log(req.body);
  try {
    const leave = await Leave.findByIdAndUpdate(id, { ...req.body });
    res.json(leave);
  } catch (error) {
    res.json(error.message);
  }
});

// const approveLeaveCtrl1 = expressAsyncHandler(async (req, res) => {
//   const id = req.params.id; // Corrected line to extract the 'id' parameter
// console.log(id);
//   try {
//     const leave = await Leave.findById(id);

//     // Check if the leave is not already approved
//     if (leave && !leave.isApproved) {
//       // Update the leave
//       leave.casualLeaves += 1;
//       leave.isApproved = true;
//       await leave.save();

//       res.json(leave);
//     } else if (leave && leave.isApproved) {
//       res.status(400).json({ message: "Leave is already approved." });
//     } else {
//       res.status(404).json({ message: "Leave not found." });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error occurred while processing the request." });
//   }
// });

const approveLeaveCtrl = expressAsyncHandler(async (req, res) => {
  // console.log(req.body);
  const id = req.params.id;
  const admin = req.user;
  console.log(admin);

  try {
    const leave = await Leave.findById(id);
    if (leave && !leave.isApproved) {
      let leaveCat = "s";
      if (leave.leaveType === "casual Leave") {
        leaveCat = "casualLeaves";
      } else if (leave.leaveType === "sick Leave") {
        leaveCat = "sickLeaves";
      }
      console.log(leaveCat);

      leave.leaveStatus = "Approved";
      leave.isApproved = true;
      await leave.save();

      const leaveCountDecrement = await User.findByIdAndUpdate(
        leave.user, // Use leave.employeeId to find the user
        {
          $inc: { [leaveCat]: -1 },
        },
        { new: true }
      );

      const frmDate = new Date(leave.fromDate);
      const formattedFrmDate = frmDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      const toDate = new Date(leave.toDate);
      const formattedToDate = toDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      let dateText;
      if (formattedFrmDate !== formattedToDate) {
        dateText = `${formattedFrmDate} to ${formattedToDate}`;
      } else {
        dateText = `${formattedToDate} `;
      }

      const notificationData = {
        employeeId: leave.employeeId,
        employeeName: `${admin.basicInformation.firstName} ${admin.basicInformation.lastName}`,
        notificationTitle: `Approved Leave for  ${leave.numOfDays} Day(s)`,
        notificationDescription: `Approved ${leave.leaveType} for  ${dateText}`,
        user: leave.user,
      };

      const notification = await Notification.create(notificationData);

      res.json(leave);
    } else if (leave && leave.isApproved) {
      res.json("Leave already Approved");
    }
  } catch (error) {
    res.json(error);
  }
});

// const approveLeaveCtrl = expressAsyncHandler(async (req, res) => {
//   const leaveId = req.params.id;

//   try {
//     const leave = await Leave.findById(leaveId);

//     if (!leave) {
//       return res.status(404).json({ error: "Leave not found" });
//     }

//     if (leave.isApproved) {
//       return res.status(400).json({ error: "Leave already approved" });
//     }

//     const leaveType = leave.leaveType;
//     leave.leaveStatus = "Approved";
//     leave[leaveType] += 1;
//     leave.isApproved = true;
//     await leave.save();

//     const user = await User.findByIdAndUpdate(
//       leave.user,
//       {
//         $inc: { [leaveType]: 1 },
//       },
//       { new: true }
//     );

//     const notificationData = {
//       employeeId: leave.employeeId,
//       notificationTitle: `Approved Leave on ${leave.fromDate}`,
//       notificationDescription: `Approved ${leave.leaveType} on ${leave.fromDate} to ${leave.toDate}`,
//       user: leave.user,
//     };

//     const notification = await Notification.create(notificationData);

//     res.json(leave);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

const cancelLeaveCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  try {
    const leave = await Leave.findByIdAndUpdate(
      id,
      {
        leaveStatus: "Canceled",
        isRejected: true,
        reasonForRejection: req.body.reasonForLeave,
      },
      { new: true }
    );
    res.json(leave);
  } catch (error) {
    res.json(error);
  }
});

const fetchAllLeaves = expressAsyncHandler(async (req, res) => {
  try {
    const allLeaves = await Leave.find({})
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(allLeaves);
  } catch (error) {
    res.json(error);
  }
});

const fetchLeave = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(typeof id);
  // console.log(id);

  try {
    const leave = await Leave.findById(id)
      .populate("user")
      .populate("appliedBy");
    // console.log("Leave", leave);
    res.json(leave);
  } catch (error) {
    res.json(error);
  }
});

// Delete Leave
const deleteLeaveCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const leave = await Leave.findByIdAndDelete(id);
    console.log(leave);
    res.json(leave);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  applyLeaveCtrl,
  updateLeaveCtrl,
  approveLeaveCtrl,
  cancelLeaveCtrl,
  fetchAllLeaves,
  fetchLeave,
  deleteLeaveCtrl,
};
