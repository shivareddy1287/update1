import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllProfileAction } from "../../../redux/slices/profileSlice/profileSlice";

const Department = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, [dispatch]);
  const profile = useSelector((state) => state?.profile);
  const { profilesList, loading, appErr, serverErr } = profile;
  console.log(profilesList, loading, appErr, serverErr);

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {loading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <div className="cs_content_img_div_profile">
            <div className="cs_asset_bg_div">
              {" "}
              {serverErr || appErr ? (
                <p>
                  {serverErr} {appErr}
                </p>
              ) : null}
              <div className="cs_aaset_add_div">
                <h1 className="cs_asset_head_main">Employee View</h1>

                <Link
                  className="cs_asset_add_asset_button"
                  to={`/organization/profile/create`}
                >
                  <span className="cs_asset_add_symbol">+</span> Add Employee
                </Link>
              </div>
              <div className="cs_asset_table">
                <table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Employee ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email address</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>App Role</th>
                      <th>Employment Type</th>
                      <th>Employee Status</th>
                      <th>Source of Hire</th>
                      <th>Date of Joining</th>
                      <th>Current Experience</th>
                      <th>Total Experience</th>

                      <th>Date of Birth</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Marital Status</th>
                      <th>About Me</th>

                      <th>Work Phone Number</th>
                      {/* <th>Extension</th> */}
                      {/* <th>Seating Location</th> */}
                      {/* <th>Tags</th> */}
                      <th>Personal Mobile Number</th>

                      {/* <th>Date of Exit</th> */}
                      {/* <th>Onboarding Status</th> */}
                      <th>Present Address</th>
                      <th>Permanent Address</th>
                      <th>Personal Email Address</th>

                      <th>Aadhaar</th>
                      <th>PAN</th>
                      <th>UAN</th>
                      <th>Added By</th>
                      <th>Added Time</th>
                      <th>Modified By</th>
                      <th>Modified Time</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profilesList?.map((profileEach) => (
                      <tr key={profileEach?.id}>
                        <td>photo</td>
                        <td>{profileEach?.basicInformation?.employerId}</td>
                        <td>{profileEach?.basicInformation?.firstName}</td>
                        <td>{profileEach?.basicInformation?.lastName}</td>
                        <td>{profileEach?.basicInformation?.email}</td>
                        <td>{profileEach?.workInformation?.Department}</td>
                        <td>{profileEach?.workInformation?.designation}</td>
                        <td>{profileEach?.workInformation?.appRole}</td>
                        <td>{profileEach?.workInformation?.employmentType}</td>
                        <td>{profileEach?.workInformation?.employeeStatus}</td>
                        <td>{profileEach?.workInformation?.sourceOfHire}</td>
                        <td>{profileEach?.workInformation?.dateOfJoining}</td>
                        <td>
                          {profileEach?.workInformation?.currentExperience}
                        </td>
                        <td>{profileEach?.workInformation?.totalExperience}</td>
                        <td>{profileEach?.personalDetails?.dateOfBirth}</td>
                        <td>{profileEach?.personalDetails?.age}</td>
                        <td>{profileEach?.personalDetails?.gender}</td>
                        <td>{profileEach?.personalDetails?.maritalStatus}</td>
                        <td>{profileEach?.personalDetails?.aboutMe}</td>
                        <td>{profileEach?.contactDetails?.workNumber}</td>
                        <td>{profileEach?.contactDetails?.personalNumber}</td>
                        <td>{profileEach?.contactDetails?.presentAddress}</td>
                        <td>{profileEach?.contactDetails?.permanentAddress}</td>
                        <td>{profileEach?.contactDetails?.emailAddress}</td>
                        <td>{profileEach?.identityInfo?.uan}</td>
                        <td>{profileEach?.identityInfo?.pan}</td>
                        <td>{profileEach?.identityInfo?.adhaar}</td>

                        <td>
                          {`${profileEach?.addedBy?.basicInformation?.firstName} ${profileEach?.addedBy?.basicInformation?.lastName} ${profileEach?.addedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{profileEach?.createdAt}</td>
                        <td>
                          {`${profileEach?.ModifiedBy?.basicInformation?.firstName} ${profileEach?.ModifiedBy?.basicInformation?.lastName} ${profileEach?.ModifiedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{profileEach?.updatedAt}</td>
                        <td>
                          <Link
                            to={`/organization/profile/update/${profileEach?.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/profile/delete/${profileEach?.id}`}
                          >
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/profile/view/${profileEach?.id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Department;
