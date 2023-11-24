import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  fetchDetailsProfileAction,
  updateUserAction,
} from "../../../redux/slices/profileSlice/profileSlice";

import { allFetchDesignationAction } from "../../../redux/slices/designation/designationSlice";
import { allFetchDepartmentAction } from "../../../redux/slices/department/departmentSlice";

const OrgUpdateProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFetchDesignationAction());
    dispatch(allFetchDepartmentAction());
    dispatch(fetchDetailsProfileAction(id));
  }, [dispatch, id]);

  const designationData = useSelector((state) => state?.designation);
  const {
    DesignationList,
    loading: designationLoading,
    appErr: designationAppErr,
    serverErr: designationServerErr,
  } = designationData;
  console.log(
    DesignationList,
    designationLoading,
    designationAppErr,
    designationServerErr,
    "designation"
  );
  const departmentData = useSelector((state) => state?.department);
  const {
    DepartmentList,
    loading: departmentLoading,
    appErr: departmentAppErr,
    serverErr: departmentServerErr,
  } = departmentData;
  console.log(
    DepartmentList,
    departmentLoading,
    departmentAppErr,
    departmentServerErr,
    "department"
  );
  const profileData = useSelector((state) => state?.profile?.profileData);
  const { firstName, lastName, employerId, email } =
    profileData?.basicInformation ? profileData?.basicInformation : "";

  const { dateOfBirth, gender, age, maritalStatus, aboutMe } =
    profileData?.personalDetails ? profileData?.personalDetails : "";

  const {
    Department,
    location,
    designation,
    appRole,
    employmentType,
    employeeStatus,
    sourceOfHire,
    dateOfJoining,
    currentExperience,
    totalExperience,
  } = profileData?.workInformation ? profileData?.workInformation : "";
  const { uan, pan, adhaar } = profileData?.identityInfo
    ? profileData?.identityInfo
    : "";

  const {
    workNumber,
    personalNumber,
    emailAddress,
    presentAddress,
    permanentAddress,
  } = profileData?.contactDetails ? profileData?.contactDetails : "";

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      basicInformation: {
        firstName: firstName,
        lastName,
        employerId,
        email,
      },
      personalDetails: {
        dateOfBirth,
        gender,
        age,
        maritalStatus,
        aboutMe,
      },
      workInformation: {
        Department: Department,
        location,
        designation: designation,
        appRole,
        employmentType,
        employeeStatus,
        sourceOfHire,
        dateOfJoining,
        currentExperience,
        totalExperience,
      },
      identityInfo: { uan, pan, adhaar },
      contactDetails: {
        workNumber,
        personalNumber,
        emailAddress,
        presentAddress,
        permanentAddress,
      },
    },
    onSubmit: (values) => {
      dispatch(updateUserAction({ id, values }));
    },
  });

  // get the user details from store
  const users = useSelector((state) => state?.profile);
  const { appErr, serverErr, isProfileUpdated } = users;

  if (isProfileUpdated) return <Navigate to={`/organization/profile`} />;

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {designationLoading || departmentLoading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <form onSubmit={formik.handleSubmit} className="cs_edit_div">
            <div>
              <Link
                to="/organization/profile"
                className="cs_edit_employee_head_div"
              >
                <div>
                  <svg
                    className="cs_font_icons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </div>
                <div>
                  <h2 className="cs_edit_employee_head"> Edit Employee</h2>
                </div>
              </Link>
            </div>
            <div className="cs_edit_form_div">
              <div>
                {designationAppErr || designationServerErr ? (
                  <p>
                    {designationServerErr} {designationAppErr}
                  </p>
                ) : null}
                {departmentServerErr || departmentAppErr ? (
                  <p>
                    {departmentServerErr} {departmentAppErr}
                  </p>
                ) : null}
                {serverErr || appErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                <h1 className="cs_edit_side_head">Basic Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employee ID:</h1>
                      <input
                        value={formik.values.basicInformation.employerId}
                        onChange={formik.handleChange(
                          "basicInformation.employerId"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">First Name:</h1>
                      <input
                        value={formik.values.basicInformation.firstName}
                        onChange={formik.handleChange(
                          "basicInformation.firstName"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Email address:</h1>
                      <input
                        value={formik.values.basicInformation.email}
                        onChange={formik.handleChange("basicInformation.email")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Last Name:</h1>
                      <input
                        value={formik.values.basicInformation.lastName}
                        onChange={formik.handleChange(
                          "basicInformation.lastName"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Work Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Department:</h1>
                      {/* <input
                      value={formik.values.workInformation.Department}
                      onChange={formik.handleChange(
                        "workInformation.Department"
                      )}
                      className="cs_edit_right_input"
                    /> */}
                      <select
                        className="cs_select_option_all"
                        value={formik.values.workInformation.Department}
                        onChange={formik.handleChange(
                          "workInformation.Department"
                        )}
                      >
                        {DepartmentList?.map((each1) => (
                          <option value={`${each1?.DepartmentName}`}>
                            {each1?.DepartmentName}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Location:</h1>
                      <input
                        value={formik.values.workInformation.location}
                        onChange={formik.handleChange(
                          "workInformation.location"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Designation:</h1>
                      {/* <CategoryDropDown
                      className="cs_edit_right_input"
                      onChange={formik.setFieldValue}
                      value={formik.values.workInformation.designation}
                    /> */}
                      <select
                        className="cs_select_option_all"
                        value={formik.values.workInformation.designation}
                        onChange={formik.handleChange(
                          "workInformation.designation"
                        )}
                      >
                        {DesignationList?.map((each) => (
                          <option value={`${each?.DesignationName}`}>
                            {each?.DesignationName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Source of Hire:</h1>
                      <input
                        value={formik.values.workInformation.sourceOfHire}
                        onChange={formik.handleChange(
                          "workInformation.sourceOfHire"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        Current Experience:
                      </h1>
                      <input
                        value={formik.values.workInformation.currentExperience}
                        onChange={formik.handleChange(
                          "workInformation.currentExperience"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">App Role:</h1>
                      <input
                        value={formik.values.workInformation.appRole}
                        onChange={formik.handleChange(
                          "workInformation.appRole"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employment Type:</h1>
                      <input
                        value={formik.values.workInformation.employmentType}
                        onChange={formik.handleChange(
                          "workInformation.employmentType"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employment Status:</h1>
                      <input
                        value={formik.values.workInformation.employeeStatus}
                        onChange={formik.handleChange(
                          "workInformation.employeeStatus"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Date of Joining:</h1>
                      <input
                        value={formik.values.workInformation.dateOfJoining}
                        onChange={formik.handleChange(
                          "workInformation.dateOfJoining"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Total Experience:</h1>
                      <input
                        value={formik.values.workInformation.totalExperience}
                        onChange={formik.handleChange(
                          "workInformation.totalExperience"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Personal Details</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Date of Birth:</h1>
                      <input
                        value={formik.values.personalDetails.dateOfBirth}
                        onChange={formik.handleChange(
                          "personalDetails.dateOfBirth"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Age:</h1>
                      <input
                        value={formik.values.personalDetails.age}
                        onChange={formik.handleChange("personalDetails.age")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Gender:</h1>
                      <input
                        value={formik.values.personalDetails.gender}
                        onChange={formik.handleChange("personalDetails.gender")}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">About Me:</h1>
                      <input
                        value={formik.values.personalDetails.aboutMe}
                        onChange={formik.handleChange(
                          "personalDetails.aboutMe"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Marital Status:</h1>
                      <input
                        value={formik.values.personalDetails.maritalStatus}
                        onChange={formik.handleChange(
                          "personalDetails.maritalStatus"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Identity Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">UAN:</h1>
                      <input
                        value={formik.values.identityInfo.uan}
                        onChange={formik.handleChange("identityInfo.uan")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">PAN:</h1>
                      <input
                        value={formik.values.identityInfo.pan}
                        onChange={formik.handleChange("identityInfo.pan")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Aadhaar:</h1>
                      <input
                        value={formik.values.identityInfo.adhaar}
                        onChange={formik.handleChange("identityInfo.adhaar")}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Contact Details</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        {" "}
                        Work Phone Number:
                      </h1>
                      <input
                        value={formik.values.contactDetails.workNumber}
                        onChange={formik.handleChange(
                          "contactDetails.workNumber"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        Personal Phone Number:
                      </h1>
                      <input
                        value={formik.values.contactDetails.personalNumber}
                        onChange={formik.handleChange(
                          "contactDetails.personalNumber"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Email address:</h1>
                      <input
                        value={formik.values.contactDetails.emailAddress}
                        onChange={formik.handleChange(
                          "contactDetails.emailAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Present Address:</h1>
                      <input
                        value={formik.values.contactDetails.presentAddress}
                        onChange={formik.handleChange(
                          "contactDetails.presentAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Permanent Address:</h1>
                      <input
                        value={formik.values.contactDetails.permanentAddress}
                        onChange={formik.handleChange(
                          "contactDetails.permanentAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs_edit_submit_cancel_div">
              <div>
                <button className="cs_edit_submit_button" type="submit">
                  Submit
                </button>
              </div>

              <div>
                <Link to={`/organization/profile`}>
                  <button className="cs_view_button_close">Close</button>
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrgUpdateProfile;
