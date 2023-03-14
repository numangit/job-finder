import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, setSort } from '../../features/filter/filterSlice';

const SearchSection = () => {
    const [selectSearch, setSelectSearch] = useState("");
    const [selectSort, setSelectSort] = useState("");
    const dispatch = useDispatch();

    //function to handle search
    const handleSearch = (e) => {
        e.key === "Enter" && dispatch(setSearch(selectSearch));
    };

    //function to handle sort
    const handleSort = (e) => {
        setSelectSort(e.target.value);
        dispatch(setSort(e.target.value));
    };

    return (
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="section-title">All Available Jobs</h1>
            <div className="flex gap-4">
                <div className="search-field group flex-1">
                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={selectSearch} onKeyUp={handleSearch} onChange={(e) => setSelectSearch(e.target.value)} />
                </div>
                <select id="lws-sort" name="sort" autoComplete="sort" className="flex-1"
                    value={selectSort} onChange={handleSort}>
                    <option value="">Default</option>
                    <option value="Low to High">Salary (Low to High)</option>
                    <option value="High to Low">Salary (High to Low)</option>
                </select>
            </div>
        </div>
    );
};

export default SearchSection;