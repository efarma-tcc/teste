import CadastroRemedioEstoque from "@/Components/CadastroRemedioEstoque/CadastroRemedioEstoque";
import CadastroRemedio from "@/Components/CadastroRemedios/CadastroRemedio";
import Button from "@/Components/Forms/Button";
import ModalPages from "@/Components/MoldalPages";
import SidebarMenu from "@/Components/Sidebar";
import TableItensEstoque from "@/Components/tables/Table-itens-estoque/TableItensEstoque";
import TableReceitaEstoque from "@/Components/tables/Table-receitas-estoque/TableReceitaEstoque";
import TableReceitas from "@/Components/tables/Table-receitas/TableReceitas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

export default function Estoque(){
    return (
        <div className="flex mx-auto space-y-4 w-full">
            <SidebarMenu/>
            <div className="block w-full">
                    <Tabs defaultValue='buscarReceita' className='ml-5'>
                        <ModalPages>
                            <TabsList className='ml-6 p-6'>
                                <TabsTrigger value="buscarReceita">Buscar Receita</TabsTrigger>
                                <TabsTrigger value="receitaEncontrada">Receita Encontrada teste</TabsTrigger>
                                <TabsTrigger value="addRemedio">Cadastrar Remédio</TabsTrigger>
                                <TabsTrigger value="addRemedioEstoque">Adicionar Remédio ao Estoque</TabsTrigger>
                                <TabsTrigger value="listaEstoque">Estoque</TabsTrigger>
                            </TabsList>
                        </ModalPages>
                        <TabsContent value='buscarReceita'>
                            <h1 className="title">Buscar Receitas</h1>
                            <TableReceitas/>
                        </TabsContent>
                        <TabsContent value='receitaEncontrada'>
                           
                
                            <div className="flex w-full mt-10">
                                <div className="w-full">
                                    <h1 className="title">Itens Sobre a Mesa</h1>
                                    <TableReceitaEstoque/>
                                </div>

                                <div className="w-full">
                                    <h1 className="title">Itens Receita</h1>
                                    <TableReceitaEstoque/>
                                </div>
                            </div>
                            
                            <div className="flex justify-center mt-8">
                                <Button>Validar remédios</Button>
                            </div>

                        </TabsContent>
                        <TabsContent value='addRemedio'>
                            <CadastroRemedio />
                        </TabsContent>
                        <TabsContent value='addRemedioEstoque'>
                            <CadastroRemedioEstoque />
                        </TabsContent>
                        <TabsContent value='listaEstoque'>
                            <TableItensEstoque/>
                        </TabsContent>
                    </Tabs>
            </div>
        </div>
    )
}