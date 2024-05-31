import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroRemedioEstoqueForm.module.css';

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
            <h1 className="title">Cadastro de Remédio no Estoque</h1>
        </div>
        <form className={styles.formContainerE}>
        <Input label="ID do Remédio" type="number" name="idRemedio" {...idRemedio}></Input>
        <Input label="Nome do Remédio" type="text" name="nomeRemedioE" {...nomeRemedioE}></Input>
        <div className={styles.formrowE}>
            <Input label="Validade" type="date" name="validadeRemedio" {...validadeRemedio}></Input>
            <Input label="Dosagem" type="number" name="dosagemRemedio" {...dosagemRemedio}></Input>
            <Input label="Unidade de Medida" type="number" name="unimedidaRemedio" {...uniMedidaRemedio}></Input>
        </div>
        <div className={styles.formrowE}>
            <Input label="Quantidade" type="number" name="quantidadeRemedio" {...quantidadeRemedio}></Input>
            <Input label="Sala" type="text" name="sala" {...sala}></Input>
        </div>
        <Button>Cadastrar Remédio no Estoque</Button>
        </form>
    </section>
  );
};

export default CadastroRemedioEstoqueForm
