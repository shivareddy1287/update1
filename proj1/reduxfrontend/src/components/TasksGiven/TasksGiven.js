import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import "./TasksGiven.css";
import { allFetchTasksGivenAction } from "../../redux/slices/TasksGiven/TasksGivenSlice";

const TasksGiven = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allFetchTasksGivenAction());
  }, [dispatch]);
  const tasks = useSelector((state) => state?.tasks);
  const { TasksGivenList } = tasks;
  console.log(TasksGivenList);

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        <div className="cs_content_img_div_profile">
          <div className="cs_asset_bg_div">
            {" "}
            <div className="cs_aaset_add_div">
              <h1 className="cs_asset_head_main">Tasks</h1>

              <Link
                className="cs_asset_add_asset_button"
                to={`/tasks/tasks-given/create`}
              >
                <span className="cs_asset_add_symbol">+</span> Add Tasks
              </Link>
            </div>
            <div className="cs_asset_table">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Importance</th>
                    <th>Status</th>
                    <th>Task Owner</th>
                    <th>Task Assigned To Employee</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {TasksGivenList?.map((tasksEach) => (
                    <tr key={tasksEach?.id}>
                      <td>{tasksEach?.taskName}</td>
                      <td>{tasksEach?.taskDescription}</td>
                      <td>{tasksEach?.startDate}</td>
                      <td>{tasksEach?.dueDate}</td>
                      <td>{tasksEach?.Importance}</td>
                      <td>{tasksEach?.Status}</td>

                      <td>
                        {`${tasksEach?.taskGivenUser?.basicInformation?.firstName} ${tasksEach?.taskGivenUser?.basicInformation?.lastName} ${tasksEach?.taskGivenUser?.basicInformation?.employerId}`}
                      </td>

                      <td>
                        {`${tasksEach?.taskAssignedUser?.basicInformation?.firstName} ${tasksEach?.taskAssignedUser?.basicInformation?.lastName} ${tasksEach?.taskAssignedUser?.basicInformation?.employerId}`}
                      </td>

                      <td>
                        <Link to={`/tasks/tasks-given/update/${tasksEach?.id}`}>
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link to={`/tasks/tasks-given/delete/${tasksEach?.id}`}>
                          Delete
                        </Link>
                      </td>
                      <td>
                        <Link to={`/tasks/tasks-given/view/${tasksEach?.id}`}>
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

export default TasksGiven;
