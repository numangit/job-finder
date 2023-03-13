import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addJobs',
                element: <AddJob />
            },
            {
                path: '/editJobs/:id',
                element: <EditJob />,
            }
        ]
    }
])