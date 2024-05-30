import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroPacienteForm.module.css';


const CadastroPacienteForm = () => {
    const nomePaciente = useForm();
    const cpfPaciente = useForm();
    const dataNascimentoPaciente = useForm();
    const telefonePaciente = useForm();
    const emailPaciente = useForm();
    const observacoes = useForm();

  return (
    <section className="animeLeft">
        <div className={styles.containerTituloP}>
            <h1 className="title">Cadastro de Pacientes</h1>
        </div>

        <form className={styles.formcontainerP}>
            <Input label="Nome Completo do Paciente" type="text" name="nomePaciente" {...nomePaciente}></Input>
            <div className={styles.formrowP}>
                <Input label="CPF" type="number" name="cpfPaciente" {...cpfPaciente}></Input>
                <Input label="Data Nascimento" type="date" name="dataNascimentoPaciente" {...dataNascimentoPaciente}></Input>
                <Input label="Telefone" type="number" name="telefonePaciente" {...telefonePaciente}></Input>
            </div>
            <Input label="E-mail" type="email" name="emailPaciente" {...emailPaciente}></Input>
            <Input label="Observações" type="text" name="observacoes" {...observacoes}></Input>
            <Button>Cadastrar Paciente</Button>
        </form>
    </section>
  );
};

export default CadastroPacienteForm


    

