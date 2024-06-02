import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "./Home";
import Login from "../Components/Login/Login";
import Cadastros from "./Cadastros";
import Receita from "./Receitas";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/home",
        element : <Home />
    },
    {
        path: "/cadastros",
        element : <Cadastros />
    },
    {
        path: "/receitas",
        element : <Receita />
    },
]);