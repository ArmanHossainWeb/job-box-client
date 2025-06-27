import React from "react";
import { Link, useLoaderData } from "react-router";
import jobDetailsImage from "../../assets/images/jobDetails.png";
import { FaBusinessTime } from "react-icons/fa";
import { CiLocationOn, CiTimer } from "react-icons/ci";

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
    <div className="w-11/12 mx-auto ">
      <img src={jobDetailsImage} className="rounded-2xl w-full" alt="" />
      <div className="my-5 space-y-12">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title} <br /> <p className="text-secondary">{company}</p>
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
              <div className="flex items-center md:space-x-2">
                <CiLocationOn />
                <p className="text-sm">{location}</p>
              </div>
              <p className="flex gap-2 items-center">
                <FaBusinessTime />
                {jobType}
              </p>
            </div>
          </div>
          <div className="dark:text-gray-800">
            <p>{description}</p>
          </div>
        </article>
        <div>
          <h1 className="text-2xl font-semibold">Recurments</h1>
          <div className="flex flex-wrap py-6 gap-2 ">
            {requirements.map((skill, index) => (
              <div key={index} className="">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-1 rounded-sm hover:bg-secondary bg-primary text-white font-semibold"
                >
                  {skill}
                </a>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold">Responsibilities</h4>
            <ul className="ml-4 space-y-1 list-disc">
              {responsibilities.map((res, index) => (
                <li key={index}>
                  <p>
                    {res}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 my-4">
            <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary hover:btn-secondary">Apply Now</button>
            </Link>
           <Link>
            <button className="btn btn-primary btn-outline">Save Job</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
