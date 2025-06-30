import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    // send data to database using axios
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <h1>
        {applications.length}application for : {job_id}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((application) => (
                <tr key={application._id}>
                  <td>1</td>
                  <td>{application.applicant}</td>
                  <td>hello how are you </td>
                  <td>
                    <select
                      onChange={(e) => handleStatusChange(e, application._id)}
                      defaultValue={application.status}
                      className="select"
                    >
                      <option disabled={true}>Update Status</option>
                      <option>Pending</option>
                      <option>Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
