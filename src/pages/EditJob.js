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
                    <JobForm isEdit={true} currentJobId={id} />
                </div>
            </main>
        </div>
    );
};

export default EditJob;