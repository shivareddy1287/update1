import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import "./NewHires.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllNewHiresAction } from "../../../redux/slices/profileSlice/profileSlice";

const dataTotal = [1, 2, 3, 4, 5, 6, 7];
const NewHires = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllNewHiresAction());
  }, [dispatch]);
  const profile = useSelector((state) => state?.profile);
  const { newHiresList } = profile;
  console.log(newHiresList);
  let heightOfTheDiv = (dataTotal.length - 1) * 60;
  console.log(heightOfTheDiv);
  return (
    <div>
      {/* <h1>New Hires</h1>
      <hr />
      {newHiresList?.map((each) => (
        <div>
          <h2>profile photo</h2>
          <h2>Name</h2>
          <h2>Role</h2>
          <h2>Starts On</h2>
          <h2>Worked Here</h2>
          <hr />
        </div>
      ))} */}
      <div>
        <div className="kl_titles">
          <div className="kl_top-cont">
            <div className="kl_staff">New Staff</div>
          </div>

          <br />

          <div className="kl_card-container">
            <div className="kl_container">
              <div className="kl_img-cont">
                <img
                  className="kl_card-image"
                  src={
                    "https://cdn.theorg.com/fbe8ed97-eee9-4ee5-8d09-70cd3562bedb_thumb.jpg"
                  }
                />
              </div>

              <div className="kl_main-heading">
                <div>
                  <div>Andy Smith</div>

                  <span>Marketing Director</span>
                </div>
              </div>

              <div className="kl_title-s">
                <div className="kl_side-title">
                  <div>
                    <div>STARTED ON </div>

                    <span> 8 MAY, 2018</span>
                  </div>

                  <div className="kl_">
                    <div>WORKED HERE </div>

                    <span> 2 YEARS,2 M</span>
                  </div>
                </div>
              </div>

              <button className="kl_button">Contact</button>

              <span className="kl_bottom">See More Information</span>
            </div>

            <div className="kl_container">
              <div className="kl_img-cont">
                <img
                  className="kl_card-image"
                  src={
                    "https://media.licdn.com/dms/image/C4E03AQHKZoXPv9HaEQ/profile-displayphoto-shrink_800_800/0/1637012172028?e=2147483647&v=beta&t=BdUxD6dRq-uIxB_jp-Xnt9Qp6IkqrHTvCOZJTwNUvug"
                  }
                />
              </div>

              <div className="kl_main-heading">
                <div>
                  <div>Ben Anderson</div>

                  <span>Copywriter</span>
                </div>
              </div>

              <div className="kl_title-s">
                <div className="kl_side-title">
                  <div>
                    <div>STARTED ON </div>

                    <span>7 JUNE, 2019</span>
                  </div>

                  <div className="kl_">
                    <div>WORKED HERE </div>

                    <span> 1 YEARS,1 M</span>
                  </div>
                </div>
              </div>

              <button className="kl_button">Contact</button>

              <span className="kl_bottom">See More Information</span>
            </div>

            <div className="kl_container">
              <div className="kl_img-cont">
                <img
                  className="kl_card-image"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdF1TpZZKmTr6COv2MuSRmiF3JDa7GSQzmGTtgfQi3-qWfug5P2gh64mEHmvhmDDF2ag&usqp=CAU"
                  }
                />
              </div>

              <div className="kl_main-heading">
                <div>
                  <div>Joahn Collins</div>

                  <span>Senior PHP Developer</span>
                </div>
              </div>

              <div className="kl_title-s">
                <div className="kl_side-title">
                  <div>
                    <div>STARTED ON </div>

                    <span>8 MAY, 2018</span>
                  </div>

                  <div className="kl_works">
                    <div>WORKED HERE </div>

                    <span> 2 YEARS,2 M</span>
                  </div>
                </div>
              </div>

              <button className="kl_button">Contact</button>

              <span className="kl_bottom">See More Information</span>
            </div>

            <div className="kl_container">
              <div className="kl_img-cont">
                <img
                  className="kl_card-image"
                  src={
                    "https://www.ncwriskmanagement.com/images/photos/staff/katherine-smith.v1504901379.jpg"
                  }
                />
              </div>

              <div className="kl_main-heading">
                <div>
                  <div>Katrine Smith</div>

                  <span>Marketing Director</span>
                </div>
              </div>

              <div className="kl_title-s">
                <div className="kl_side-title">
                  <div>
                    <div>STARTED ON </div>

                    <span>24 JULY, 2015</span>
                  </div>

                  <div className="kl_works">
                    <div>WORKED HERE </div>

                    <span> 5 YEARS,0 M</span>
                  </div>
                </div>
              </div>

              <button className="kl_button">Contact</button>

              <span className="kl_bottom">See More Information</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHires;
