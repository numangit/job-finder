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
                path: '/addJob',
                element: <AddJob />
            },
            {
                path: '/editJob/:id',
                element: <EditJob />,
            }
        ]
    }
])