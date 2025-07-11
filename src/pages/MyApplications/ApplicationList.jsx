import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="w-11/12 mx-auto">

      <div className=" p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">
        Job Applications So Far:{" "}
        <span className="text-blue-600">{applications.length}</span>
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-inner">
        <table className="min-w-full table-auto border-collapse text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
              <th className="px-6 py-3 border-b">#</th>
              <th className="px-6 py-3 border-b">Applicant Name</th>
              <th className="px-6 py-3 border-b">Job Title</th>
              <th className="px-6 py-3 border-b">Favorite Color</th>
              <th className="px-6 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((application, index) => (
              <ApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ApplicationList;
