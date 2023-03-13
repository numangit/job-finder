export const getJobs = () => {
    const response = fetch("http://localhost:9000/jobs");
    const data = response.json();
    return data;
};

export const postJob = (jobData) => {
    const response = fetch("http://localhost:9000/jobs", {
        method: 'POST',
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(jobData)
    });
    const data = response.json();
    return data;
};

export const updateJob = (id, jobData) => {
    const response = fetch(`http://localhost:9000/jobs/${id}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(jobData)
    });
    const data = response.json();
    return data;
};
