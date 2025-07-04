import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiShoppingBagFill } from "react-icons/pi";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    company,
    location,
    jobType,
    applicationDeadline,
    description,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="">
      <div className="card bg-base-200 shadow-sm p-4">
        <div className="flex gap-3 items-center">
          <figure>
            <img
              className="w-14"
              src={company_logo || "default-logo.png"}
              alt="Company Logo"
            />
          </figure>
          <div>
            <h1 className="font-semibold text-xl">{title}</h1>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <CiLocationOn />
              <p>{location}</p>
            </div>
          </div>
        </div>

        <div className="card-body p-0 pt-3">
          <h2 className="card-title text-lg">{company}</h2>

          <div className="flex gap-3 mb-2">
            <p className="flex gap-1 items-center text-sm text-gray-500">
              <PiShoppingBagFill />
              {jobType}
            </p>
            <p className="flex gap-1 items-center text-sm text-gray-500">
              <MdOutlineAccessTime />
              {applicationDeadline}
            </p>
          </div>

          <p className="text-sm mb-3">
           {description}
          </p>

          <div className="mb-4">
            {requirements.map(
              (skill, index) => (
                <span key={index} className="badge badge-outline m-1 text-xs">
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="card-actions justify-between items-center">
            <p className="text-md font-semibold text-primary">
              {salaryRange.currency}   {salaryRange.min}-{salaryRange.max}
            </p>
                 <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary btn-sm">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
