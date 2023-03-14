import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobType: "",
    search: "",
    sort: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        selectJobType: (state, action) => {
            state.jobType = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
    }
});

export default filterSlice.reducer;
export const { selectJobType, setSearch, setSort } = filterSlice.actions;