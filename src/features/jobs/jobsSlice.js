import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJob, getJob, getJobs, postJob, updateJob } from "./jobsAPI";

const initialState = {
    jobs: [],
    job: {},
    isLoading: false,
    isError: false,
    error: ""
};

//thunk function to fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await getJobs();
    return jobs;
});

//thunk function to fetch jobs
export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
    const job = await getJob(id);
    return job;
});

//thunk function to add job
export const addJob = createAsyncThunk("jobs/addJob", async (jobData) => {
    const addedJob = await postJob(jobData);
    return addedJob;
});

//thunk function to edit job
export const editJob = createAsyncThunk("jobs/editJob", async ({ currentJobId, jobData }) => {
    const updatedJob = await updateJob(currentJobId, jobData);
    return updatedJob;
});

//thunk function to remove job
export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
    const removedJob = await deleteJob(id);
    return removedJob;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        addNewJob: (state, action) => {
            state.jobs.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
                state.jobs = [];
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.jobs = [];
            })
            .addCase(fetchJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
                state.job = {};
            })
            .addCase(fetchJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.job = action.payload;
            })
            .addCase(fetchJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.job = {};
            })
            .addCase(removeJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.jobs = state.jobs.filter(job => job.id !== action.meta.arg);
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

export default jobsSlice.reducer;
export const { addNewJob } = jobsSlice.actions;