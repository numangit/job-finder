import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobForm from '../components/common/JobForm';
import { fetchJob } from '../features/jobs/jobsSlice';

const EditJob = () => {
    const dispatch = useDispatch();

    //to get the url parameter 
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchJob(id));
    }, [dispatch, id]);

    return (
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 className="mb-10 text-center section-title">Edit Job</h1>

                <div className="max-w-3xl mx-auto">
                    {/* <form className="space-y-6">
                        <div className="fieldContainer">
                            <label htmlFor="lwsJobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                            <select id="lwsJobTitle" name="lwsJobTitle" autoComplete="lwsJobTitle" required>
                                <option value="" hidden selected>Select Job</option>
                                <option>Software Engineer</option>
                                <option>Software Developer</option>
                                <option>Full Stack Developer</option>
                                <option>MERN Stack Developer</option>
                                <option>DevOps Engineer</option>
                                <option>QA Engineer</option>
                                <option>Product Manager</option>
                                <option>Social Media Manager</option>
                                <option>Senior Executive</option>
                                <option>Junior Executive</option>
                                <option>Android App Developer</option>
                                <option>IOS App Developer</option>
                                <option>Frontend Developer</option>
                                <option>Frontend Engineer</option>
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label htmlFor="lwsJobType">Job Type</label>
                            <select id="lwsJobType" name="lwsJobType" autoComplete="lwsJobType" required>
                                <option value="" hidden selected>Select Job Type</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label htmlFor="lwsJobSalary">Salary</label>
                            <div className="flex border rounded-md shadow-sm border-slate-600">
                                <span className="input-tag">BDT</span>
                                <input type="number" name="lwsJobSalary" id="lwsJobSalary" required className="!rounded-l-none !border-0"
                                    placeholder="20,00,000" />
                            </div>
                        </div>

                        <div className="fieldContainer">
                            <label htmlFor="lwsJobDeadline">Deadline</label>
                            <input type="date" name="lwsJobDeadline" id="lwsJobDeadline" required />
                        </div>

                        <div className="text-right">
                            <input type="submit" value="Edit" className="lws-submit cursor-pointer btn btn-primary w-fit" />
                        </div>
                    </form> */}
                    <JobForm isEdit={true} currentJobId={id} />
                </div>
            </main>
        </div>
    );
};

export default EditJob;