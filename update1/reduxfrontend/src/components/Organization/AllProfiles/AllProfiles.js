import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfileAction } from "../../../redux/slices/profileSlice/profileSlice";
import "./AllProfiles.css";
const AllProfiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, [dispatch]);

  return (
    <div>
      <div className="kl_titles">
        <div className="kl_top-cont">
          <div className="kl_staff">Staff</div>
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

          <div className="kl_container">
            <div className="kl_img-cont">
              <img
                className="kl_card-image"
                src={
                  "https://www.pugetsound.edu/sites/default/files/styles/profile_image/public/2023-04/katherine-smith-pugetsound_99991183.jpg?h=6c83441f&itok=9rG_ZJLM"
                }
              />
            </div>

            <div className="kl_main-heading">
              <div>
                <div>Klint Istwood</div>

                <span>Senior QA Engineer</span>
              </div>
            </div>

            <div className="kl_title-s">
              <div className="kl_side-title">
                <div>
                  <div>STARTED ON </div>

                  <span>10 OCT, 2019</span>
                </div>

                <div className="kl_works">
                  <div>WORKED HERE </div>

                  <span> 0 YEARS,9 M</span>
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
                <div>Ken Jones</div>

                <span>Technical Director</span>
              </div>
            </div>

            <div className="kl_title-s">
              <div className="kl_side-title">
                <div>
                  <div>STARTED ON </div>

                  <span>8 MAY, 2010</span>
                </div>

                <div className="kl_works">
                  <div>WORKED HERE </div>

                  <span> 10 YEARS,2 M</span>
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
                  "https://www.aapain.com/wp-content/uploads/Katherine-Smith-A-WEB-200x300.jpg"
                }
              />
            </div>

            <div className="kl_main-heading">
              <div>
                <div>Omar Hayam</div>

                <span>Project Manager</span>
              </div>
            </div>

            <div className="kl_title-s">
              <div className="kl_side-title">
                <div>
                  <div>STARTED ON </div>

                  <span>2 FEB, 2020</span>
                </div>

                <div className="kl_works">
                  <div>WORKED HERE </div>

                  <span> 0 YEARS,5 M</span>
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
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6xZbHHaKjHHKlSIV-wx0Gqlisvj99VRHnT8zoRYs8V9tAusfhD0VnNI34vOLMs4VkGY&usqp=CAU"
                }
              />
            </div>

            <div className="kl_main-heading">
              <div>
                <div>Petra Kolins</div>

                <span>Junior UI/UX Designer</span>
              </div>
            </div>

            <div className="kl_title-s">
              <div className="kl_side-title">
                <div>
                  <div>STARTED ON </div>

                  <span>5 APRIL, 2015</span>
                </div>

                <div className="kl_works">
                  <div>WORKED HERE </div>

                  <span> 3 YEARS,3 M</span>
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
                  "https://pmarts.ca/wp-content/uploads/2022/05/katherine-smith.jpg"
                }
              />
            </div>

            <div className="kl_main-heading">
              <div>
                <div>Randy March</div>

                <span>Content Manager</span>
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
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRsedwfbcj-J3umXuHQnX9WdkVDMtei2qcg&usqp=CAU"
                }
              />
            </div>

            <div className="kl_main-heading">
              <div>
                <div>Sammy Stone</div>

                <span>CEO</span>
              </div>
            </div>

            <div className="kl_title-s">
              <div className="kl_side-title">
                <div>
                  <div>STARTED ON </div>

                  <span>24 JULY, 2010</span>
                </div>

                <div className="kl_works">
                  <div>WORKED HERE </div>

                  <span> 10 YEARS,0 M</span>
                </div>
              </div>
            </div>

            <button className="kl_button">Contact</button>

            <span className="kl_bottom">See More Information</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProfiles;
