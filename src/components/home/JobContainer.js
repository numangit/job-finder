import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobs/jobsSlice';
import JobCard from './JobCard';

const JobContainer = () => {

    const { jobs, isLoading, isError, error } = useSelector(state => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch])

    return (
        <div className="jobs-list ">
            {
                isLoading
                && <h1 style={{ color: 'white' }}>Loading...</h1>
            }
            {
                !isLoading && isError
                && <h1 style={{ color: 'Red' }}>{error}</h1>
            }
            {
                !isLoading && !isError && jobs.length > 0
                && jobs?.map(job => <JobCard key={job.id} job={job} />)
            }
            {
                !isLoading && !isError && jobs.length === 0
                && <h1 style={{ color: 'white' }}>No Jobs Available</h1>
            }
        </div>
    );
};

export default JobContainer;