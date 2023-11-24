import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import "./ExitDetails.css";
// import DateFormatter from "../../utils/DateFormatter";
import { allFetchexitDetailsAction } from "../../../redux/slices/exitDetails/exitDetailsSlice";

const ExitDetails = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state?.profile);
  const { _id } = profile?.userAuth;
  useEffect(() => {
    dispatch(allFetchexitDetailsAction(_id));
  }, [dispatch, _id]);
  const exitDetails = useSelector((state) => state?.exitDetails);
  const { exitDetailsList } = exitDetails;

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_content_img_div_profile">
          <div className="cs_bg_img_div_profile"></div>
          <div className="cs_asset_bg_div">
            {" "}
            <div className="cs_aaset_add_div">
              <h1 className="cs_asset_head_main">Exit Details</h1>

              <Link
                className="cs_asset_add_asset_button"
                to={`/self-service/exitdetails/create`}
              >
                <span className="cs_asset_add_symbol">+</span> Add Exit Details
              </Link>
            </div>
            <div className="cs_asset_table">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Interviewer</th>
                    <th>Separation Date</th>
                    <th>Reason for leaving</th>
                    <th>Working for this organization again</th>
                    <th>Think the organization do to improve staff welfare</th>
                    <th>What did you like the most of the organization</th>
                    <th>Anything you wish to share with us</th>
                    <th>Company Vehicle handed in</th>
                    <th>All library books submitted</th>
                    <th>Exit interview conducted</th>
                    <th>Resignation letter submitted</th>
                    <th>All equipments handed in</th>
                    <th>Security</th>
                    <th>Notice period followed</th>
                    <th>Manager/Supervisor clearance</th>
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
                  {exitDetailsList?.map((exitDetailsEach) => (
                    <tr key={exitDetailsEach?.id}>
                      <td>
                        {`${exitDetailsEach?.user?.basicInformation?.firstName} ${exitDetailsEach?.user?.basicInformation?.lastName} ${exitDetailsEach?.user?.basicInformation?.employerId}`}
                      </td>
                      <td>
                        {`${exitDetailsEach?.Interviewer?.basicInformation?.firstName} ${exitDetailsEach?.Interviewer?.basicInformation?.lastName} ${exitDetailsEach?.Interviewer?.basicInformation?.employerId}`}
                      </td>

                      <td>{exitDetailsEach?.separationDate}</td>
                      <td>{exitDetailsEach?.ReasonForLeaving}</td>
                      <td>
                        {exitDetailsEach?.WorkingforthisOrganizationAgain}
                      </td>
                      <td>
                        {
                          exitDetailsEach?.Thinktheorganizationdotoimprovestaffwelfare
                        }
                      </td>
                      <td>
                        {
                          exitDetailsEach?.Whatdidyoulikethemostoftheorganization
                        }
                      </td>
                      <td>{exitDetailsEach?.Anythingyouwishtosharewithus}</td>
                      <td>{exitDetailsEach?.CompanyVehiclehandedin}</td>
                      <td>{exitDetailsEach?.Alllibrarybookssubmitted}</td>
                      <td>{exitDetailsEach?.Exitinterviewconducted}</td>
                      <td>{exitDetailsEach?.Resignationlettersubmitted}</td>
                      <td>{exitDetailsEach?.Allequipmentshandedin}</td>
                      <td>{exitDetailsEach?.Security}</td>
                      <td>{exitDetailsEach?.Noticeperiodfollowed}</td>
                      <td>{exitDetailsEach?.ManagerSupervisorclearance}</td>

                      <td>
                        {`${exitDetailsEach?.addedBy?.basicInformation?.firstName} ${exitDetailsEach?.addedBy?.basicInformation?.lastName} ${exitDetailsEach?.addedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{exitDetailsEach?.createdAt}</td>
                      <td>
                        {`${exitDetailsEach?.ModifiedBy?.basicInformation?.firstName} ${exitDetailsEach?.ModifiedBy?.basicInformation?.lastName} ${exitDetailsEach?.ModifiedBy?.basicInformation?.employerId}`}
                      </td>
                      <td>{exitDetailsEach?.updatedAt}</td>
                      <td>
                        <Link
                          to={`/self-service/exitdetails/update/${exitDetailsEach?.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/self-service/exitdetails/delete/${exitDetailsEach?.id}`}
                        >
                          Delete
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/self-service/exitdetails/view/${exitDetailsEach?.id}`}
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

export default ExitDetails;
