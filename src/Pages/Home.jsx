import SidebarMenu from "../Components/Sidebar/index"


export default function Page1(){
    return (
        <div className="flex mx-auto space-y-4 w-full">
            <SidebarMenu/>
            <div className="block w-full">
                <h1 className="text-5xl font-smibold">SEJA BEM VINDO</h1>
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