import React, { Suspense } from 'react';
import HotJobs from './HotJobs';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const jobsPromise = fetch("http://localhost:3000/jobs").then(res => res.json())
    return (
        <div>
            home
            <Suspense fallback={Loader}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;