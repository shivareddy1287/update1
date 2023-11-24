import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { allFetchbenefitAction } from "../../../redux/slices/benefitSlice/benefitSlice";

const OrgBenefit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchbenefitAction());
  }, [dispatch]);
  const benefit = useSelector((state) => state?.benefit);
  const { benefitList, loading, appErr, serverErr } = benefit;
  console.log(benefitList, loading, appErr, serverErr);
  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {loading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <div className="cs_content_img_div_profile">
            <div className="cs_bg_img_div_profile"></div>
            <div className="cs_asset_bg_div">
              {" "}
              {serverErr || appErr ? (
                <p>
                  {serverErr} {appErr}
                </p>
              ) : null}
              <div className="cs_aaset_add_div">
                <h1 className="cs_asset_head_main">Benefit</h1>

                <Link
                  className="cs_asset_add_asset_button"
                  to={`/organization/benefit/create`}
                >
                  <span className="cs_asset_add_symbol">+</span> Add Benefit
                </Link>
              </div>
              <div className="cs_asset_table">
                {" "}
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Education allowance</th>
                      <th>Lunch</th>
                      <th>Housing Allowance</th>

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
                    {benefitList?.map((eachBenefit) => (
                      <tr key={eachBenefit?.id}>
                        <td>
                          {`${eachBenefit?.user?.basicInformation?.firstName} ${eachBenefit?.user?.basicInformation?.lastName} ${eachBenefit?.user?.basicInformation?.employerId}`}
                        </td>
                        <td>{eachBenefit?.educationAllowance}</td>
                        <td>{eachBenefit?.lunchBenfit}</td>
                        <td>{eachBenefit?.housingAllowance}</td>

                        <td>
                          {`${eachBenefit?.addedBy?.basicInformation?.firstName} ${eachBenefit?.addedBy?.basicInformation?.lastName} ${eachBenefit?.addedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{eachBenefit?.createdAt}</td>
                        <td>
                          {`${eachBenefit?.ModifiedBy?.basicInformation?.firstName} ${eachBenefit?.ModifiedBy?.basicInformation?.lastName} ${eachBenefit?.ModifiedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{eachBenefit?.updatedAt}</td>
                        <td>
                          <Link
                            to={`/organization/benefit/update/${eachBenefit?.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/benefit/delete/${eachBenefit?.id}`}
                          >
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/benefit/view/${eachBenefit?.id}`}
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

export default OrgBenefit;
