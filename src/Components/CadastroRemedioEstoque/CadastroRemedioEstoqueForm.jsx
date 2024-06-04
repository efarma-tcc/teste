import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroRemedioEstoqueForm.module.css';
import Input4 from '../Forms/Input4';
import Input2 from '../Forms/Input2';
import Button1 from '../Forms/Button1';

const CadastroRemedioEstoqueForm = () => {
    const idRemedio = useForm();
    const nomeRemedioE = useForm();
    const validadeRemedio = useForm();
    const dosagemRemedio = useForm();
    const uniMedidaRemedio = useForm();
    const quantidadeRemedio = useForm();
    const sala = useForm();

  return (
    <section className="animeLeft">
        <div className={styles.containerTituloE}>
            <h1 className="title2">Cadastro de Remédio no Estoque</h1>
        </div>
        <form className={styles.formContainerE}>
            <div className={styles.formrowE}>
                <Input label="ID do Remédio" type="number" name="idRemedio" {...idRemedio}></Input>
                <Input4 label="Nome do Remédio" type="text" name="nomeRemedioE" {...nomeRemedioE}></Input4>
                <Input label="Dosagem" type="number" name="dosagemRemedio" {...dosagemRemedio}></Input>
            </div>
            <div className={styles.formrowE}>
                <Input label="Validade" type="date" name="validadeRemedio" {...validadeRemedio}></Input>
                
                <Input label="Unidade de Medida" type="number" name="unimedidaRemedio" {...uniMedidaRemedio}></Input>
                <Input label="Quantidade" type="number" name="quantidadeRemedio" {...quantidadeRemedio}></Input>
                <Input label="Sala" type="text" name="sala" {...sala}></Input>
            </div>
            <div className={styles.formrowE}>

            </div>
        <Button1>Cadastrar Remédio no Estoque</Button1>
        </form>
    </section>
  );
};

export default CadastroRemedioEstoqueForm
