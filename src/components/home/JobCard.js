import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeJob } from '../../features/jobs/jobsSlice';

const JobCard = ({ job }) => {
    const { id, title, type, salary, deadline } = job;
    const dispatch = useDispatch();

    //function to handle delete
    const deleteHandler = (id) => {
        dispatch(removeJob(id));
    };

    return (
        <div className="job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                        {
                            type === "Full Time"
                            && <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                        }
                        {
                            type === "Internship"
                            && <i className="fa-solid fa-stop !text-[#FF5757] text-lg mr-1.5"></i>
                        }
                        {
                            type === "Remote"
                            && <i className="fa-solid fa-stop !text-[#56E5C4] text-lg mr-1.5"></i>
                        }
                        {type}
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        BDT {salary}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <Link to={`/editJob/${id}`}>
                    <span className="hidden sm:block">
                        <button type="button" className="lws-edit btn btn-primary">
                            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </span>
                </Link>

                <span className="sm:ml-3">
                    <button onClick={() => deleteHandler(id)} type="button" className="lws-delete btn btn-danger ">
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default JobCard;