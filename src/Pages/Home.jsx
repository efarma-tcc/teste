import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import SidebarMenu from "../Components/Sidebar/index"
import ModalPages from "@/Components/MoldalPages"
import CadastroPaciente from "@/Components/CadastroPaciente/CadastroPaciente"
import CadastroFuncionario from "@/Components/CadastroFuncionario/CadastroFuncionario"


export default function Page1(){
    return (
        <div className="flex mx-auto space-y-4 w-full">
            <SidebarMenu/>
            <div className="block w-full">
                <h1>TSTE</h1>
                <Tabs defaultValue='paciente' className='ml-5'>
                    <TabsList className='ml-6 p-6'>
                        <TabsTrigger value="paciente">Pacientes</TabsTrigger>
                        <TabsTrigger value="funcionarios">Funcionarios</TabsTrigger>
                        <TabsTrigger value="listaPessoas">Lista</TabsTrigger>
                    </TabsList>

                    <TabsContent value='paciente'>
                        <CadastroPaciente/>
                    </TabsContent>
                    <TabsContent value='funcionarios'>
                        <CadastroFuncionario/>
                    </TabsContent>
                    <TabsContent value='listaPessoas'>
                        <h1>CODIGO DO listaPessoas</h1>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    )
}
// <Tabs defaultValue='paciente' className='ml-5'>
//     <ModalPages>
//         <TabsList className='ml-6 p-6'>
//             <TabsTrigger value="paciente">Pacientes</TabsTrigger>
//             <TabsTrigger value="funcionarios">Funcionarios</TabsTrigger>
//             <TabsTrigger value="listaPessoas">Lista</TabsTrigger>
//         </TabsList>
//     </ModalPages>

//     <TabsContent value='paciente'>
//         <CadastroPaciente/>
//     </TabsContent>
//     <TabsContent value='funcionarios'>
//         <CadastroFuncionario/>
//     </TabsContent>
//     <TabsContent value='listaPessoas'>
//         <h1>CODIGO DO listaPessoas</h1>
//     </TabsContent>


// </Tabs>