import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectJobType } from '../../features/filter/filterSlice';

const Sidebar = () => {

    const dispatch = useDispatch();

    //function to handle filter job type 
    const handleJobFilter = (e, type) => {
        e.preventDefault();
        dispatch(selectJobType(type));
    };

    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <Link
                            to={"/"} className="main-menu menu-active lws-allJob">
                            <i className="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </Link>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li onClick={(e) => handleJobFilter(e, "Internship")}>
                                <a className="sub-menu" href="/jobs/internship">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </a>
                            </li>
                            <li onClick={(e) => handleJobFilter(e, "Full Time")}>
                                <a className="sub-menu" href="/jobs/fulltime">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </a>
                            </li>
                            <li onClick={(e) => handleJobFilter(e, "Remote")}>
                                <a className="sub-menu" href="/jobs/remote">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/addJob" className="main-menu lws-AddJob">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;