import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

     // process salary range data
    const { min, max, currency, ...newjob } = data;
    newjob.salaryRange = { min, max, currency };
    console.log(newjob);

    // process requirements
    newjob.requirements = newjob.requirements
      .split(",")
      .map((req) => req.trim());

    // process responsibilities
    newjob.responsibilities = newjob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newjob.status = "active";

    // send data to database
    axios
      .post("http://localhost:3000/jobs", newjob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This new job has been saved and Published.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);

    
  };
  return (

<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
  <h2 className="text-2xl font-bold text-center mb-6">Post a New Job</h2>
  <form onSubmit={handleAddJob} className="space-y-6">
    
    {/* Page Details */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Page Details</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="label">Job Title</label>
          <input type="text" name="title" className="input w-full" placeholder="Enter job title" />
        </div>
        <div>
          <label className="label">Company</label>
          <input type="text" name="company" className="input w-full" placeholder="Enter Company Name" />
        </div>
        <div>
          <label className="label">Location</label>
          <input type="text" name="location" className="input w-full" placeholder="Enter location" />
        </div>
        <div>
          <label className="label">Company Logo URL</label>
          <input type="text" name="company_logo" className="input w-full" placeholder="Enter Logo URL" />
        </div>
      </div>
    </fieldset>

    {/* Job Type */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Job Type</legend>
      <div className="flex flex-wrap gap-3 mt-4">
        <input className="btn" type="radio" name="jobType" aria-label="All" />
        <input className="btn" type="radio" name="jobType" value="on-site" aria-label="On-Site" />
        <input className="btn" type="radio" name="jobType" value="remote" aria-label="Remote" />
        <input className="btn" type="radio" name="jobType" value="hybrid" aria-label="Hybrid" />
      </div>
    </fieldset>

    {/* Job Category */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Job Category</legend>
      <select name="jobCategory" defaultValue="" className="select w-full mt-4">
        <option disabled value="">Select job category</option>
        <option>Engineering</option>
        <option>Marketing Specialist</option>
        <option>Finance Manager</option>
        <option>Project Manager</option>
        <option>DevOps Engineer</option>
      </select>
    </fieldset>

    {/* Application Deadline */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Application Deadline</legend>
      <input name="deadline" type="date" className="input w-full mt-4" />
    </fieldset>

    {/* Salary Range */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Salary Range</legend>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="label">Minimum Salary</label>
          <input type="text" name="min" className="input w-full" placeholder="Minimum" />
        </div>
        <div>
          <label className="label">Maximum Salary</label>
          <input type="text" name="max" className="input w-full" placeholder="Maximum" />
        </div>
        <div>
          <label className="label">Currency</label>
          <select name="currency" defaultValue="" className="select w-full">
            <option disabled value="">Select Currency</option>
            <option>BDT</option>
            <option>INR</option>
            <option>PKR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </fieldset>

    {/* Description */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Job Description</legend>
      <textarea name="description" className="textarea w-full mt-4" rows={4} placeholder="Enter job description" />
    </fieldset>

    {/* Requirements */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Job Requirements</legend>
      <textarea name="requirements" className="textarea w-full mt-4" rows={4} placeholder="Enter requirements (comma separated)" />
    </fieldset>

    {/* Responsibilities */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">Job Responsibilities</legend>
      <textarea name="responsibilities" className="textarea w-full mt-4" rows={4} placeholder="Enter responsibilities (comma separated)" />
    </fieldset>

    {/* HR Info */}
    <fieldset className="p-6 border border-gray-300 rounded-lg bg-gray-50">
      <legend className="text-lg font-semibold text-gray-700 px-2">HR Information</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="label">HR Name</label>
          <input type="text" name="hr_name" className="input w-full" placeholder="Enter HR Name" />
        </div>
        <div>
          <label className="label">HR Email</label>
          <input type="email" name="hr_email" className="input w-full" defaultValue={user.email} placeholder="Enter HR Email" />
        </div>
      </div>
    </fieldset>

    <div className="text-center">
      <input type="submit" value="Add Job" className="btn btn-primary px-8 py-2 text-lg" />
    </div>
  </form>
</div>
  );
};

export default AddJob;
