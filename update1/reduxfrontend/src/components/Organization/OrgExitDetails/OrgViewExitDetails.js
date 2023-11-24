import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleexitDetailsAction } from "../../../redux/slices/exitDetails/exitDetailsSlice";

const OrgViewExitDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleexitDetailsAction(id));
  }, [dispatch, id]);

  const exitDetails = useSelector((state) => state?.exitDetails);
  const { singleexitDetails } = exitDetails;
  const {
    user,
    separationDate,
    Interviewer,
    ReasonForLeaving,
    WorkingforthisOrganizationAgain,
    Thinktheorganizationdotoimprovestaffwelfare,
    Whatdidyoulikethemostoftheorganization,
    Anythingyouwishtosharewithus,
    CompanyVehiclehandedin,
    Alllibrarybookssubmitted,
    Exitinterviewconducted,
    Resignationlettersubmitted,
    Allequipmentshandedin,
    Security,
    Noticeperiodfollowed,
    ManagerSupervisorclearance,
  } = singleexitDetails ? singleexitDetails : "";
  console.log(singleexitDetails);

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_edit_div">
          <div>
            <Link
              to={`/organization/exitdetails`}
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
                <h2 className="cs_edit_employee_head"> View Exit Details</h2>
              </div>
            </Link>
          </div>
          <div className="cs_edit_form_div">
            <div>
              <h1 className="cs_edit_side_head">Separation</h1>
              <div className="cs_edit_left_right_div">
                <div className="cs_edit_left_input_right_input">
                  {" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Employee ID:</h1>
                    <h1 className="cs_view_right_input">
                      {user?.basicInformation?.firstName}{" "}
                      {user?.basicInformation?.lastName}{" "}
                      {user?.basicInformation?.employerId}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Interviewer:</h1>

                    <h1 className="cs_view_right_input">
                      {Interviewer?.basicInformation?.firstName}{" "}
                      {Interviewer?.basicInformation?.lastName}{" "}
                      {Interviewer?.basicInformation?.employerId}
                    </h1>
                  </div>
                </div>
                <div className="cs_edit_left_input_right_input">
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Separation Date:</h1>

                    <h1 className="cs_view_right_input">{separationDate}</h1>
                  </div>{" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Reason for leaving:</h1>

                    <h1 className="cs_view_right_input">{ReasonForLeaving}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="cs_edit_side_head">Questionairre</h1>
              <div className="cs_edit_left_right_div">
                <div className="cs_edit_left_input_right_input">
                  {" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Working for this organization again:
                    </h1>
                    <h1 className="cs_view_right_input">
                      {WorkingforthisOrganizationAgain}{" "}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Think the organization do to improve staff welfare:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Thinktheorganizationdotoimprovestaffwelfare}{" "}
                    </h1>
                  </div>
                </div>
                <div className="cs_edit_left_input_right_input">
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      What did you like the most of the organization:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Whatdidyoulikethemostoftheorganization}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Anything you wish to share with us:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Anythingyouwishtosharewithus}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="cs_edit_side_head">
                {" "}
                Checklist for Exit Interview
              </h1>
              <div className="cs_edit_left_right_div">
                <div className="cs_edit_left_input_right_input">
                  {" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Company Vehicle handed in:
                    </h1>
                    <h1 className="cs_view_right_input">
                      {CompanyVehiclehandedin}{" "}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      All library books submitted:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Alllibrarybookssubmitted}{" "}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Exit interview conducted:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Exitinterviewconducted}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Resignation letter submitted:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Resignationlettersubmitted}
                    </h1>
                  </div>
                </div>
                <div className="cs_edit_left_input_right_input">
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      All equipments handed in:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Allequipmentshandedin}
                    </h1>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Security:</h1>

                    <h1 className="cs_view_right_input">{Security}</h1>
                  </div>{" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Notice period followed:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {Noticeperiodfollowed}
                    </h1>
                  </div>{" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">
                      Manager/Supervisor clearance:
                    </h1>

                    <h1 className="cs_view_right_input">
                      {ManagerSupervisorclearance}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_edit_submit_cancel_div">
            <div>
              <Link to={`/organization/exitdetails`}>
                <button className="cs_view_button_close">Close</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgViewExitDetails;
