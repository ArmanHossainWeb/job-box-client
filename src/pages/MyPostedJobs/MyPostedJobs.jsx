import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';
import UseJobApi from '../../api/UseJobApi';

const MyPostedJobs = () => {
    const {user} = UseAuth()
    const {jobsCreatedByPromise} = UseJobApi()

    return (
        <div className='w-11/12 mx-auto'>
            <h2>my posted jobs : </h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} ></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;