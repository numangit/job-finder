export const fetchJob = () => {
    const response = fetch("http://localhost:9000/jobs");
    const data = response.json();
    return data;
};