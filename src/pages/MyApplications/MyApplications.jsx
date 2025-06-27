import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import Loader from "../../components/loader/Loader";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <ApplicationStats></ApplicationStats>

      <Suspense fallback={<Loader />}>
        <ApplicationList myApplicationPromise={myApplicationsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
