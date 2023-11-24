import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import "./Department.css";

import { allFetchDepartmentAction } from "../../../redux/slices/department/departmentSlice";

const Department = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchDepartmentAction());
  }, [dispatch]);
  const department = useSelector((state) => state?.department);
  const { DepartmentList } = department;

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_content_img_div_profile">
          <div className="cs_asset_bg_div">
            {" "}
            <div className="cs_aaset_add_div">
              <h1 className="cs_asset_head_main">Department</h1>

              <Link
                className="cs_asset_add_asset_button"
                to={`/organization/department/create`}
              >
                <span className="cs_asset_add_symbol">+</span> Add Department
              </Link>
            </div>
            <div className="cs_asset_table">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Department Name</th>
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
                  {DepartmentList?.map((DepartmentEach) => (
                    <tr key={DepartmentEach?.id}>
                      <td>{DepartmentEach?.DepartmentName}</td>
                      <td>
                        {`${DepartmentEach?.addedBy?.basicInformation?.firstName} ${DepartmentEach?.addedBy?.basicInformation?.lastName} ${DepartmentEach?.addedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{DepartmentEach?.createdAt}</td>
                      <td>
                        {`${DepartmentEach?.ModifiedBy?.basicInformation?.firstName} ${DepartmentEach?.ModifiedBy?.basicInformation?.lastName} ${DepartmentEach?.ModifiedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{DepartmentEach?.updatedAt}</td>
                      <td>
                        <Link
                          to={`/organization/department/update/${DepartmentEach?.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/organization/department/delete/${DepartmentEach?.id}`}
                        >
                          Delete
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/organization/department/view/${DepartmentEach?.id}`}
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
      </div>
    </div>
  );
};

export default Department;
