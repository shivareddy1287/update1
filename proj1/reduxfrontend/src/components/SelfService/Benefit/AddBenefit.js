import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { fetchAllProfileAction } from "../../../redux/slices/profileSlice/profileSlice";

import { benefitCreateAction } from "../../../redux/slices/benefitSlice/benefitSlice";

const AddBenefit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, [dispatch]);

  const benefit = useSelector((state) => state?.benefit);
  const { isbenefitAdded } = benefit;
  const user = useSelector((state) => state?.profile);
  const profilesList = user?.profilesList;
  const { _id } = user?.userAuth;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      user: profilesList?.[0]?._id,

      addedBy: _id,
      ModifiedBy: _id,

      lunchBenfit: "",
      educationAllowance: "",
      housingAllowance: "",
    },
    onSubmit: (values) => {
      dispatch(benefitCreateAction(values));
    },
  });

  if (isbenefitAdded) return <Navigate to={`/self-service/benefit`} />;

  return (
    <div>
      <div className="cs_div_profile">
        <form onSubmit={formik.handleSubmit} className="cs_edit_div">
          <div>
            <Link
              to={`/self-service/benefit`}
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
                <h2 className="cs_edit_employee_head"> Add Benefit</h2>
              </div>
            </Link>
          </div>
          <div className="cs_edit_form_div">
            <div>
              <h1 className="cs_edit_side_head">Benefit</h1>
              <div className="cs_edit_left_right_div">
                <div className="cs_edit_left_input_right_input">
                  {" "}
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Employee ID:</h1>
                    <select
                      className="cs_select_option_all"
                      value={formik.values.user}
                      onChange={formik.handleChange("user")}
                    >
                      {profilesList?.map((each) => (
                        <option value={`${each?._id}`}>
                          {each?.basicInformation?.firstName}{" "}
                          {each?.basicInformation?.lastName}{" "}
                          {each?.basicInformation?.employerId}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Education allowance:</h1>
                    <input
                      className="cs_edit_right_input"
                      value={formik.values.educationAllowance}
                      onChange={formik.handleChange("educationAllowance")}
                    />
                  </div>
                </div>
                <div className="cs_edit_left_input_right_input">
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Lunch:</h1>
                    <input
                      className="cs_edit_right_input"
                      value={formik.values.lunchBenfit}
                      onChange={formik.handleChange("lunchBenfit")}
                    />
                  </div>
                  <div className="cs_edit_input_div">
                    <h1 className="cs_edit_left_input">Housing Allowance:</h1>
                    <input
                      className="cs_edit_right_input"
                      value={formik.values.housingAllowance}
                      onChange={formik.handleChange("housingAllowance")}
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
              <Link to={`/self-service/benefit`}>
                <button className="cs_view_button_close">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBenefit;
