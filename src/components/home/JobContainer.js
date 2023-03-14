import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobs/jobsSlice';
import JobCard from './JobCard';

const JobContainer = () => {

    const { jobs, isLoading, isError, error } = useSelector(state => state.jobs);
    const { jobType, search, sort } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch])

    //function to filter by job type
    const filterByType = (job) => {
        if (jobType === "Internship") {
            return job.type === "Internship";
        } else if (jobType === "Full Time") {
            return job.type === "Full Time";
        } else if (jobType === "Remote") {
            return job.type === "Remote";
        } else {
            return true;
        }
    };

    //function to sort by salary
    const sortBySalary = (prev, current) => {
        if (sort === "Low to High") {
            return (Number(prev.salary) > Number(current.salary) ? 1 : -1)
        } else if (sort === "High to Low") {
            return (Number(prev.salary) > Number(current.salary) ? -1 : 1)
        } else {
            return true;
        }
    };


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
                && jobs?.filter(filterByType).sort(sortBySalary).map(job => <JobCard key={job.id} job={job} />)
            }
            {
                !isLoading && !isError && jobs.length === 0
                && <h1 style={{ color: 'white' }}>No Jobs Available</h1>
            }
        </div>
    );
};

export default JobContainer;