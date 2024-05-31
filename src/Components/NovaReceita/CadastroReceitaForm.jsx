import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroReceitaForm.module.css';

const CadastroReceitaForm = () => {
    const nomePacienteR = useForm();
    const cpfR = useForm();
    const telefoneR = useForm();
    const nomeMedico = useForm();
    const descricaoReceita = useForm();
    const local = useForm();
    const assinatura = useForm();
    const dataPrescricao = useForm();

  return (
    <section className="animeLeft">
        <div className={styles.containerTituloRe}>
            <h1 className="title">Nova Receita</h1>
        </div>
        <form className={styles.formContainerRe}>
            <div className={styles.formrowRe}>
                <Input label="Nome do Paciente" type="text" name="nomePacienteR" {...nomePacienteR}></Input>
                <Input label="CPF do Paciente" type="number" name="cpfR" {...cpfR}></Input>
                <Input label="Telefone do Paciente" type="number" name="telefoneR" {...telefoneR}></Input>
            </div>
            <div className={styles.formrowRe}>
                <Input label="Nome do Médico" type="text" name="nomeMedico" {...nomeMedico}></Input>
                <Input label="CRM do Médico" type="number" name="crm"></Input>
            </div>
            <Input label="Descrição da Receita" type="text-area" name="descricaoReceita" {...descricaoReceita}></Input>
            <div className={styles.formrowRe}>
                <Input label="Local" type="text" name="local" {...local}></Input>
                <Input label="Data" type="date" name="dataPrescricao" {...dataPrescricao}></Input>
            </div>
            <Button>Cadastrar nova Receita</Button>
        </form>
    </section>
  );
};

export default CadastroReceitaForm
