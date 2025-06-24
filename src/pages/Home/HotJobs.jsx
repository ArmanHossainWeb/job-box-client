import React, { use } from "react";
import JobCard from "../../components/jobCard/JobCard";

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-5 space-y-2">
        <h1 className="text-5xl font-semibold"> Hot Jobs of the day</h1>
        <p className="text-gray-500">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
