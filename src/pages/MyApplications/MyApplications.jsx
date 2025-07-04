import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import Loader from "../../components/loader/Loader";
import UseApplicationApi from "../../api/UseApplicationApi";

const MyApplications = () => {
  const { user } = UseAuth();
  const {myApplicationsPromise} = UseApplicationApi();

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
