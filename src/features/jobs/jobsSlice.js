import { getJobs, postJob } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ""
};

//thunk function to fetch jobs
export const fetchJobs = async () => {
    const jobs = await getJobs();
    return jobs;
};

//thunk function to add job
export const addJobs = async (jobData) => {
    const addedJob = await postJob(jobData);
    return addedJob;
};

//thunk function to edit job
export const editJobs = async ({ id, jobData }) => {
    const updatedJob = await postJob(id, jobData);
    return updatedJob;
};

//thunk function to remove job
export const removeJobs = async (id) => {
    const removedJob = await postJob(id);
    return removedJob;
};

