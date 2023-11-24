import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import "./TasksGiven.css";
import { allFetchTasksGivenAction } from "../../redux/slices/TasksGiven/TasksGivenSlice";

const AllTasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchTasksGivenAction());
  }, [dispatch]);
  const tasks = useSelector((state) => state?.tasks);
  const { TasksGivenList } = tasks;
  console.log(TasksGivenList);

  return (
    <div className="cs_div_profile">
      <div className="cs_left_back"></div>
      <div className="cs_tasks_all_div">
        <h2 class="cs_all_tasks_heading">All Tasks</h2>
        <div className="cs_total_task_count_div">
          <div className="cs_total_task_count_bg">
            <h2 className="cs_task_count_head">
              {TasksGivenList ? TasksGivenList?.length : 0}
            </h2>
          </div>
          <div class="cs_top_bar_headings_div">
            <div>
              <h2 class="cs_top_bar_head">Task Details</h2>
            </div>
            <div>
              <h2 class="cs_top_bar_head">Task Assign To</h2>
            </div>
          </div>
        </div>
        {/* <div class="cs_top_bar_headings_div">
          <h2 class="cs_top_bar_head">Task Details</h2>
          <h2 class="cs_top_bar_head">Task Assign To</h2>
        </div> */}
        {TasksGivenList?.map((eachTask) => (
          <div class="cs_tasks_first_div_all">
            <div class="cs_tasks_second_div_profile">
              {eachTask?.Status === "Completed" ? (
                <div class="cs_tasks_right_tick">
                  <p class="cs_right_head">&#x2713;</p>
                </div>
              ) : (
                <div class="cs_tasks_wrong_tick">
                  <p class="cs_right_head">X</p>
                </div>
              )}

              <div class="cs_tasks_profile_content_div">
                <div class="cs_tasks_profile_bg_div">
                  <svg
                    className="cs_tasks_icon_profile"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
                <div class="cs_tasks_head_content_div">
                  <div>
                    <div>
                      <p class="cs_task_name_para">{eachTask?.taskName}</p>
                    </div>
                    <div>
                      <p class="cs_task_profile_name">
                        {eachTask?.taskGivenUser?.basicInformation?.employerId}-
                        {eachTask?.taskGivenUser?.basicInformation?.firstName}
                        {eachTask?.taskGivenUser?.basicInformation?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="cs_common_font">{eachTask?.dueDate}</div>
                </div>
              </div>
            </div>
            <div className="cs_common_font">
              {" "}
              {eachTask?.taskAssignedUser?.basicInformation?.employerId}-
              {eachTask?.taskAssignedUser?.basicInformation?.firstName}
              {eachTask?.taskAssignedUser?.basicInformation?.lastName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
