export const getJobs = async () => {
    const response = await fetch("http://localhost:9000/jobs");
    const data = response.json();
    return data;
};

export const postJob = async (jobData) => {
    const response = await fetch("http://localhost:9000/jobs", {
        method: 'POST',
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(jobData)
    });
    const data = response.json();
    return data;
};

export const updateJob = async (id, jobData) => {
    const response = await fetch(`http://localhost:9000/jobs/${id}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(jobData)
    });
    const data = response.json();
    return data;
};

export const deleteJob = async (id) => {
    const response = await fetch(`http://localhost:9000/jobs/${id}`, { method: 'DELETE' });
    const data = response.json();
    return data;
};