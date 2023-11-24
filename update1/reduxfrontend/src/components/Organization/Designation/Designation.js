import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import "./Designation.css";

import { allFetchDesignationAction } from "../../../redux/slices/designation/designationSlice";

const Designation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchDesignationAction());
  }, [dispatch]);
  const designation = useSelector((state) => state?.designation);
  const { DesignationList } = designation;
  console.log(DesignationList);

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_content_img_div_profile">
          <div className="cs_asset_bg_div">
            {" "}
            <div className="cs_aaset_add_div">
              <h1 className="cs_asset_head_main">Designation</h1>

              <Link
                className="cs_asset_add_asset_button"
                to={`/organization/designation/create`}
              >
                <span className="cs_asset_add_symbol">+</span> Add Designation
              </Link>
            </div>
            <div className="cs_asset_table">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Designation Name</th>
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
                  {DesignationList?.map((designationEach) => (
                    <tr key={designationEach?.id}>
                      <td>{designationEach?.DesignationName}</td>
                      <td>
                        {`${designationEach?.addedBy?.basicInformation?.firstName} ${designationEach?.addedBy?.basicInformation?.lastName} ${designationEach?.addedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{designationEach?.createdAt}</td>
                      <td>
                        {`${designationEach?.ModifiedBy?.basicInformation?.firstName} ${designationEach?.ModifiedBy?.basicInformation?.lastName} ${designationEach?.ModifiedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{designationEach?.updatedAt}</td>
                      <td>
                        <Link
                          to={`/organization/designation/update/${designationEach?.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/organization/designation/delete/${designationEach?.id}`}
                        >
                          Delete
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/organization/designation/view/${designationEach?.id}`}
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

export default Designation;
