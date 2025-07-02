import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";
import Loader from "../../components/loader/Loader";

const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <ApplicationStats></ApplicationStats>

      <Suspense fallback={<Loader></Loader>}>
        <ApplicationList myApplicationPromise={myApplicationsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
