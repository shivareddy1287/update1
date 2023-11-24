import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import "./App.css";

import Teamm from "./components/LeaveTracker/Leaves/LeaveApplications/leaveApplications2";
import Holidays2 from "./components/LeaveTracker/Holidays/holidays2";

// components 1
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
import Holidays from "./components/LeaveTracker/Holidays/holidays";
import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
import UpdateLeave from "./components/LeaveTracker/Leaves/updateLeave/UpdateLeave";

import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
import AddAddressProof from "./components/HrLetters/AddAddressProof";
import HolidayRecord from "./components/LeaveTracker/Holidays/holidayRecord";
import UpdateHoliday from "./components/LeaveTracker/Holidays/updateHoliday";

// Dashboard
import Dashboard from "./components/Home/Dashboard/Dashboard";

// Attendence
import CheckInOut from "./components/LeaveTracker/Attendence/checkInOut";

//test protected
import Layout from "./components/layout/layout";

//imports 2

//test protected
// import Layout from "./components/layout/layout";

// imports 2
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";

// single profile
import Profile from "./components/SelfService/Profile/Profile";
import UpdateProfile from "./components/SelfService/Profile/UpdateProfile";
import ViewDetails from "./components/SelfService/Profile/ViewDetails";

import Team from "./components/Team/Team";
// Profile Asset
import Asset from "./components/SelfService/Asset/Asset";
import DeleteAsset from "./components/SelfService/Asset/DeleteAsset";
import UpdateAsset from "./components/SelfService/Asset/UpdateAsset";
import AddAsset from "./components/SelfService/Asset/AddAsset";
import ViewAsset from "./components/SelfService/Asset/ViewAsset";
// Profile Benefit
import Benefit from "./components/SelfService/Benefit/Benefit";
import AddBenefit from "./components/SelfService/Benefit/AddBenefit";
import DeleteBenefit from "./components/SelfService/Benefit/DeleteBenefit";
import ViewBenefit from "./components/SelfService/Benefit/ViewBenefit";
import UpdateBenefit from "./components/SelfService/Benefit/UpdateBenefit";

// Profile ExitDetails
import ExitDetails from "./components/SelfService/ExitDetails/ExitDetails";
import AddExitDetails from "./components/SelfService/ExitDetails/AddExitDetails";
import DeleteExitDetails from "./components/SelfService/ExitDetails/DeleteExitDetails";
import UpdateExitDetails from "./components/SelfService/ExitDetails/UpdateExitDetails";
import ViewExitDetails from "./components/SelfService/ExitDetails/ViewExitDetails";

// Organization OrgAddProfile
import OrgAddProfile from "./components/Organization/OrgProfile/OrgAddProfile";
import OrgUpdateProfile from "./components/Organization/OrgProfile/OrgUpdateProfile";
import OrgViewDetails from "./components/Organization/OrgProfile/OrgViewDetails";
import OrgProfile from "./components/Organization/OrgProfile/OrgProfile";
import OrgDeleteProfile from "./components/Organization/OrgProfile/OrgDeleteProfile";

// OrgExitDetails
import OrgExitDetails from "./components/Organization/OrgExitDetails/OrgExitDetails";
import OrgAddExitDetails from "./components/Organization/OrgExitDetails/OrgAddExitDetails";
import OrgDeleteExitDetails from "./components/Organization/OrgExitDetails/OrgDeleteExitDetails";
import OrgUpdateExitDetails from "./components/Organization/OrgExitDetails/OrgUpdateExitDetails";
import OrgViewExitDetails from "./components/Organization/OrgExitDetails/OrgViewExitDetails";

// OrgAsset
import OrgAsset from "./components/Organization/OrgAsset/OrgAsset";
import OrgAddAsset from "./components/Organization/OrgAsset/OrgAddAsset";
import OrgDeleteAsset from "./components/Organization/OrgAsset/OrgDeleteAsset";
import OrgUpdateAsset from "./components/Organization/OrgAsset/OrgUpdateAsset";
import OrgViewAsset from "./components/Organization/OrgAsset/OrgViewAsset";

// OrgAddBenefit
import OrgAddBenefit from "./components/Organization/OrgBenefit/OrgAddBenefit";
import OrgViewBenefit from "./components/Organization/OrgBenefit/OrgViewBenefit";
import OrgDeleteBenefit from "./components/Organization/OrgBenefit/OrgDeleteBenefit";
import OrgUpdateBenefit from "./components/Organization/OrgBenefit/OrgUpdateBenefit";
import OrgBenefit from "./components/Organization/OrgBenefit/OrgBenefit";

// Designation
import Designation from "./components/Organization/Designation/Designation";
import AddDesignation from "./components/Organization/Designation/AddDesignation";
import UpdateDesignation from "./components/Organization/Designation/UpdateDesignation";
import DeleteDesignation from "./components/Organization/Designation/DeleteDesignation";
import ViewDesignation from "./components/Organization/Designation/ViewDesignation";

// Department
import Department from "./components/Organization/Department/Department";
import AddDepartment from "./components/Organization/Department/AddDepartment";
import DeleteDepartment from "./components/Organization/Department/DeleteDepartment";
import ViewDepartment from "./components/Organization/Department/ViewDepartment";
import UpdateDepartment from "./components/Organization/Department/UpdateDepartment";

// NewHires
// NewHires
import NewHires from "./components/Organization/NewHires/NewHires";
import ChartTree from "./components/Organization/ChartTree/ChartTree";
import AllProfiles from "./components/Organization/AllProfiles/AllProfiles";

// TasksGiven
// TasksGiven
import TasksGiven from "./components/TasksGiven/TasksGiven";
import AddTasksGiven from "./components/TasksGiven/AddTasksGiven";
import UpdateTasksGiven from "./components/TasksGiven/UpdateTasksGiven";
import DeleteTasksGiven from "./components/TasksGiven/DeleteTasksGiven";
import ViewTasksGiven from "./components/TasksGiven/ViewTasksGiven";
import MyTasks from "./components/TasksGiven/MyTasks";
import AllTasks from "./components/TasksGiven/AllTasks";
import DocumentRecords from "./components/HrLetters/usersDocuments/DocumentRecords";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "7vh" }}>
        <Navbar />
      </div>

      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="bl-routes-path">
          <Routes>
            <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/leave-tracker/overview" element={<ListView />} />
            <Route path="/leave-tracker/calender" element={<CalenderView />} />
            <Route path="/leave-tracker/apply-leave" element={<ApplyLeave />} />
            <Route
              path="/leave-tracker/leave-applications"
              element={<Teamm />}
            />
            <Route
              path="/leave-tracker/leave-applications/:id"
              element={<LeaveRecord />}
            />
            <Route
              path="/leave-tracker/leave-applications/update/:id"
              element={<UpdateLeave />}
            />
            <Route path="/leave-tracker/holidays" element={<Holidays2 />} />
            <Route
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            />
            <Route
              path="/leave-tracker/holidays/:id"
              element={<HolidayRecord />}
            />
            <Route
              path="/leave-tracker/holidays/update/:id"
              element={<UpdateHoliday />}
            />
            {/* <PrivateProtectRoute
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}

            {/* <PrivateProtectRoute 
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}
            <Route
              path="/documents/adress-proof"
              element={<AddAddressProof />}
            />

            {/* <Route
              path="/documents/bonafide-letter"
              element={<UsersDocuments />}
            /> */}
            <Route
              path="/documents/bonafide-letter/:id"
              element={<DocumentRecords />}
            />

            <Route path="/attendence/checkin-out" element={<CheckInOut />} />

            {/* Routes  2 */}
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/self-service/profile"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            />

            {/* <Route
              path="/self-service/profile/:id"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            /> */}

            <Route
              path="/self-service/profile/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateProfile />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/profile/viewdetials/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDetails />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/team"
              element={
                <PrivateProtectRoute>
                  <Team />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/team/:id"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset"
              element={
                <PrivateProtectRoute>
                  <Asset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/create"
              element={
                <PrivateProtectRoute>
                  <AddAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewAsset />
                </PrivateProtectRoute>
              }
            />

            {/* Benefit */}
            <Route
              path="/self-service/benefit"
              element={
                <PrivateProtectRoute>
                  <Benefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/create"
              element={
                <PrivateProtectRoute>
                  <AddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* ExitDetails */}

            <Route
              path="/self-service/exitdetails"
              element={
                <PrivateProtectRoute>
                  <ExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <AddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Designation */}
            <Route
              path="/organization/designation"
              element={
                <PrivateProtectRoute>
                  <Designation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/create"
              element={
                <PrivateProtectRoute>
                  <AddDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDesignation />
                </PrivateProtectRoute>
              }
            />

            {/* Department */}

            <Route
              path="/organization/department"
              element={
                <PrivateProtectRoute>
                  <Department />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/create"
              element={
                <PrivateProtectRoute>
                  <AddDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDepartment />
                </PrivateProtectRoute>
              }
            />

            {/* Organization */}
            {/* Organization Profile */}

            <Route
              path="/organization/profile"
              element={
                <PrivateProtectRoute>
                  <OrgProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteProfile />
                </PrivateProtectRoute>
              }
            />

            {/* Organization ExitDetails */}

            <Route
              path="/organization/exitdetails"
              element={
                <PrivateProtectRoute>
                  <OrgExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Organization Asset  */}

            <Route
              path="/organization/asset"
              element={
                <PrivateProtectRoute>
                  <OrgAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit"
              element={
                <PrivateProtectRoute>
                  <OrgBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* TasksGiven  */}

            <Route
              path="/tasks/tasks-given"
              element={
                <PrivateProtectRoute>
                  <TasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/create"
              element={
                <PrivateProtectRoute>
                  <AddTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteTasksGiven />
                </PrivateProtectRoute>
              }
            />

            {/* NewHires
          NewHires */}

            <Route
              path="/organization/new-hires"
              element={
                <PrivateProtectRoute>
                  <NewHires />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/tree-chart"
              element={
                <PrivateProtectRoute>
                  <ChartTree />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/all-profiles"
              element={
                <PrivateProtectRoute>
                  <AllProfiles />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/my-tasks"
              element={
                <PrivateProtectRoute>
                  <MyTasks />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/all-tasks"
              element={
                <PrivateProtectRoute>
                  <AllTasks />
                </PrivateProtectRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
