import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Page1 from "./Page1";
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
        path: "/cFun",
        element : <CadastroFuncionario/>
    },
    {
        path: "/cPac",
        element : <CadastroPaciente/>
    },
    {
        path: "/cRem",
        element : <CadastroRemedio/>
    },
    {
        path: "/cRemEst",
        element : <CadastroRemedioEstoque/>
    },
    {
        path: "/cRec",
        element : <CadastroReceita/>
    },
]);