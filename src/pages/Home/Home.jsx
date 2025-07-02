import React, { Suspense } from 'react';
import HotJobs from './HotJobs';
import Banner from './Banner';
import MillionsOfJobs from './MillionsOfJobs';
import Stats from './Stats';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const jobsPromise = fetch("http://localhost:3000/jobs").then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loader></Loader>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
            <MillionsOfJobs></MillionsOfJobs>
            <Stats></Stats>
        </div>
    );
};

export default Home;