// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
// import Layout from "./components/layout/layout";

// //routes1
// import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
// import Holidays from "./components/LeaveTracker/Holidays/holidays";
// import Sidebar from "./components/sidebar/Sidebar";
// import Navbar from "./components/navbar/Navbar";
// import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
// import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
// import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
// import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
// import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
// import AddressProof from "./components/AddressProof/AddressProof";

// function App() {
//   return (
//     <Router>
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <div style={{ display: "flex" }}>
//           <Sidebar />
//           <div className="bl-routes-path">
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route path="/leave-tracker/holidays" element={<Holidays />} />
//                 <Route element={<PrivateProtectRoute />}>
//                   <Route
//                     path="/leave-tracker/add-holiday"
//                     element={<AddHolidays />}
//                   />
//                 </Route>
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import {
//   Schedule,
//   ViewDirective,
//   ViewsDirective,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   Inject,
//   Resize,
//   DragAndDrop,
//   ScheduleComponent,
// } from "@syncfusion/ej2-react-schedule";

// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchHolidaysAction } from "../../../../redux/slices/leaves/holidaySlices";

// const sampleCalenderData = [
//   {
//     Id: 2,
//     Subject: "May Day",
//     Location: "",
//     StartTime: "2023-05-01T00:00:00.000+00:00",
//     EndTime: "2023-05-01T00:00:00.000+00:00",
//     CategoryColor: "#357cd2",
//   },
// ];

// const CalenderView = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchHolidaysAction());
//   }, [dispatch]);

//   const holidaysList = useSelector((state) => state?.holidays);
//   const { allHolidays } = holidaysList;
//   console.log(allHolidays);

//   const calenderData = allHolidays?.map((holiday) => {
//     return {
//       Id: 2,
//       Subject: holiday.name,
//       Location: "",
//       StartTime: holiday.fromDate,
//       EndTime: holiday.toDate,
//       CategoryColor: "#357cd2",
//     };
//   });
//   console.log(calenderData);

//   return (
//     <div>
//       <div>
//         <ScheduleComponent
//           height="600px"
//           eventSettings={{ dataSource: calenderData }}
//         >
//           <Inject services={[Day, Month]} />
//         </ScheduleComponent>
//       </div>
//     </div>
//   );
// };

// export default CalenderView;
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefaultLayout = ({ children }) => (
  <div>
    <div style={{ height: "3.4em" }}>
      {/* Navbar component */}
      <Navbar />
    </div>
    <div style={{ display: "flex" }}>
      {/* Sidebar component */}
      <Sidebar />
      <div className="bl-routes-path">{children}</div>
    </div>
  </div>
);

const NoSidebarNoNavbarLayout = ({ children }) => (
  <div className="bl-routes-path">{children}</div>
);

const ss = () => (
  <BrowserRouter>
    <Routes>
      {/* Routes with default layout */}
      <Route
        path="/home/*"
        element={
          <DefaultLayout>
            <Routes>
              <Route path="/home/dashboard" element={<Dashboard />} />
            </Routes>
          </DefaultLayout>
        }
      />

      {/* Route without sidebar and navbar */}
      <Route
        path="/leave-tracker/overview"
        element={
          <NoSidebarNoNavbarLayout>
            <ListView />
          </NoSidebarNoNavbarLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default ss;
