import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "./Home";
import CadastroFuncionario from "../Components/CadastroFuncionario/CadastroFuncionario";
import CadastroPaciente from "../Components/CadastroPaciente/CadastroPaciente";
import CadastroRemedio from "../Components/CadastroRemedios/CadastroRemedio";
import CadastroRemedioEstoque from "../Components/CadastroRemedioEstoque/CadastroRemedioEstoque";
import CadastroReceita from "../Components/NovaReceita/CadastroReceita";
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