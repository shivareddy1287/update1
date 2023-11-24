import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfileAction } from "../../../redux/slices/profileSlice/profileSlice";
import "./ChartTree.css";
const ChartTree = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, [dispatch]);
  const profile = useSelector((state) => state?.profile);
  const { profilesList } = profile;
  console.log(profilesList);
  let heightOfTheDiv = (profilesList?.length - 1) * 63;
  console.log(heightOfTheDiv);
  const [selectButtonToggle, setSelectButtonToggle] = useState(false);
  const [selectButtonToggle2, setSelectButtonToggle2] = useState(false);
  const onButtonToggleShowChart = () => {
    setSelectButtonToggle(!selectButtonToggle);
    setSelectButtonToggle2(false);
  };
  const onButtonToggleShowChart2 = () => {
    setSelectButtonToggle2(!selectButtonToggle2);
    setSelectButtonToggle(false);
  };
  return (
    <div>
      <div className="cs_bg_div_top">
        <div class="cs_hori_div_main">
          <div class="cs_line_div_main">
            <div class="cs_img_div_head">
              <div onClick={onButtonToggleShowChart} class="cs_main">
                <div class="cs_img_div_bg_circle">P</div>
                <div class="cs_chart_content_div">
                  <div class="cs_chart_content_head">Shiva Aade</div>
                  <div>Software Engineer</div>
                </div>
              </div>
            </div>
            {selectButtonToggle && <div class="cs_hori_line"></div>}
          </div>

          {selectButtonToggle && (
            <div class="cs_div" style={{ height: `${heightOfTheDiv}px` }}>
              <div>
                {profilesList?.map((each) => (
                  <div>
                    <div class="cs_line_div">
                      <div class="cs_hori_line"></div>
                      <div class="cs_img_div_head">
                        <div class="cs_main">
                          <div class="cs_img_div_bg_circle">P</div>
                          <div class="cs_chart_content_div">
                            <div class="cs_chart_content_head">Shiva Aade</div>
                            <div>Software Engineer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div class="cs_hori_div_main">
          <div class="cs_line_div_main">
            <div class="cs_img_div_head">
              <div onClick={onButtonToggleShowChart2} class="cs_main">
                <div class="cs_img_div_bg_circle">P</div>
                <div class="cs_chart_content_div">
                  <div class="cs_chart_content_head">Shiva Aade</div>
                  <div>Software Engineer</div>
                </div>
              </div>
            </div>
            {selectButtonToggle2 && <div class="cs_hori_line"></div>}
          </div>
          {selectButtonToggle2 && (
            <div class="cs_div" style={{ height: `${heightOfTheDiv}px` }}>
              {/* <div class="cs_vertical_line"></div> */}

              <div>
                {profilesList?.map((each) => (
                  <div>
                    <div class="cs_line_div">
                      <div class="cs_hori_line"></div>
                      <div class="cs_img_div_head">
                        <div class="cs_main">
                          <div class="cs_img_div_bg_circle">P</div>
                          <div class="cs_chart_content_div">
                            <div class="cs_chart_content_head">Shiva Aade</div>
                            <div>Software Engineer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartTree;
