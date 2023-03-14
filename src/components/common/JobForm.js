import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJob, addNewJob, editJob } from '../../features/jobs/jobsSlice';

const JobForm = ({ isEdit, currentJobId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //getting the current job data
    const currentJob = useSelector(state => state.jobs.job);

    //controlled form states
    const [title, setTitle] = useState(isEdit ? currentJob?.title : '');
    const [type, setType] = useState(isEdit ? currentJob?.type : '');
    const [salary, setSalary] = useState(isEdit ? currentJob?.salary : '');
    const [deadline, setDeadline] = useState(isEdit ? currentJob?.deadline : '');

    useEffect(() => {
        setTitle(isEdit ? currentJob?.title : '');
        setType(isEdit ? currentJob?.type : '');
        setSalary(isEdit ? currentJob?.salary : '');
        setDeadline(isEdit ? currentJob?.deadline : '');
    }, [isEdit, currentJob])

    const jobData = {
        title,
        type,
        salary,
        deadline
    };

    //function to reset form states
    const resetForm = () => {
        setTitle('');
        setType('');
        setSalary('');
        setDeadline('');
    };

    //function to handle add job
    const addHandler = (e) => {
        e.preventDefault();
        dispatch(addJob(jobData));
        dispatch(addNewJob(jobData));
        resetForm();
    };

    //function to handle edit job
    const editHandler = (e) => {
        e.preventDefault();
        dispatch(editJob({ currentJobId, jobData }));
        resetForm();
        navigate('/');
    };

    return (
        <form onSubmit={isEdit ? editHandler : addHandler} className="space-y-6">
            <div className="fieldContainer">
                <label htmlFor="lwsJobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                <select id="lwsJobTitle" name="lwsJobTitle" autoComplete="lwsJobTitle" required value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="MERN Stack Developer">MERN Stack Developer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Senior Executive">Senior Executive</option>
                    <option value="Junior Executive">Junior Executive</option>
                    <option value="Android App Developer">Android App Developer</option>
                    <option value="IOS App Developer">IOS App Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                </select>
            </div>
            <div className="fieldContainer">
                <label htmlFor="lwsJobType">Job Type</label>
                <select id="lwsJobType" name="lwsJobType" autoComplete="lwsJobType" required value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lwsJobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input type="number" name="lwsJobSalary" id="lwsJobSalary" required className="!rounded-l-none !border-0"
                        placeholder="20,00,000"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)} />
                </div>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lwsJobDeadline">Deadline</label>
                <input type="date" name="lwsJobDeadline" id="lwsJobDeadline" required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)} />
            </div>
            <div className="text-right">
                <input type="submit" value={isEdit ? "Edit" : "Save"} className="lws-submit cursor-pointer btn btn-primary w-fit" />
            </div>
        </form>
    );
};

export default JobForm;