import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    company,
    requirements,
    responsibilities,
  } = useLoaderData();

  return (
      <div className="w-11/12 mx-auto p-6 bg-slate-100 shadow-lg rounded-2xl mt-10">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">Job ID: {_id}</p>
          <p className="text-lg text-gray-600 mt-2">{company}</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>{location}</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              {jobType}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Job Description
            </h2>
            <p className="text-gray-600">{description}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary w-full btn-outline">Apply Now</button>
          </Link>
        </div>
      </div>
   
  );
};

export default JobDetails;
