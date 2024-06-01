import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "./Home";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/h",
        element : <Home />
    },
]);