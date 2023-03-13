import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, postJob } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ""
};

//thunk function to fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await getJobs();
    return jobs;
});

//thunk function to add job
export const addJobs = createAsyncThunk("jobs/addJobs", async (jobData) => {
    const addedJob = await postJob(jobData);
    return addedJob;
});

//thunk function to edit job
export const editJobs = createAsyncThunk("jobs/editJobs", async ({ id, jobData }) => {
    const updatedJob = await postJob(id, jobData);
    return updatedJob;
});

//thunk function to remove job
export const removeJobs = createAsyncThunk("jobs/removeJobs", async (id) => {
    const removedJob = await postJob(id);
    return removedJob;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
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
    }
});

export default jobsSlice.reducer;