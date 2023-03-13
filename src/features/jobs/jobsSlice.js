import { getJobs } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const fetchJobs = async () => {
    const jobs = await getJobs();
    return jobs;
};