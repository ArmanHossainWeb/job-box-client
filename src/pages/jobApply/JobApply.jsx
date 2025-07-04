import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const facebook = form.facebook.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      facebook,
    };

    // send data to database
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Apply for this job:{" "}
        <Link to={`/jobs/${jobId}`} className="text-red-500 underline">
          View Details
        </Link>
      </h1>

      <form
        onSubmit={handleApply}
        className="bg-white p-6 shadow-lg rounded-2xl space-y-4"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://linkedin.com/in/your-profile"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            GitHub Profile
          </label>
          <input
            type="url"
            name="github"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://github.com/your-username"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Facebook Profile
          </label>
          <input
            type="url"
            name="facebook"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://facebook.com/your-profile"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
