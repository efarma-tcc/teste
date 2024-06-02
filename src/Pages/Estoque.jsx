import CadastroRemedioEstoque from "@/Components/CadastroRemedioEstoque/CadastroRemedioEstoque";
import CadastroRemedio from "@/Components/CadastroRemedios/CadastroRemedio";
import ModalPages from "@/Components/MoldalPages";
import SidebarMenu from "@/Components/Sidebar";
import TableReceitaEstoque from "@/Components/tables/Table-receitas-estoque/TableReceitaEstoque";
import TableReceitas from "@/Components/tables/Table-receitas/TableReceitas";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
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
                            <TableReceitas/>
                        </TabsContent>
                        <TabsContent value='receitaEncontrada'>
                            <TableReceitaEstoque/>
                            <h1>Receita Encontrada</h1>
                        </TabsContent>
                        <TabsContent value='addRemedio'>
                            <CadastroRemedio />
                        </TabsContent>
                        <TabsContent value='addRemedioEstoque'>
                            <CadastroRemedioEstoque />
                        </TabsContent>
                        <TabsContent value='listaEstoque'>
                            <h1>Lista estoque</h1>
                        </TabsContent>
                    </Tabs>
            </div>
        </div>
    )
}