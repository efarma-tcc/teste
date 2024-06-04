import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroPacienteForm.module.css';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';


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
            <h1 className="title2 text-3xl font-semibold m-2">Cadastro de Pacientes</h1>
        </div>

        <form className={styles.formcontainerP}>
            <div className={styles.formrowP}>
                <Input2 label="Nome Completo do Paciente" type="text" name="nomePaciente" {...nomePaciente}></Input2>
                <Input4 label="CPF" type="number" name="cpfPaciente" {...cpfPaciente}></Input4>
            </div>
            <div className={styles.formrowP}>
                <Input2 label="E-mail" type="email" name="emailPaciente" {...emailPaciente}></Input2>
                <Input label="Data Nascimento" type="date" name="dataNascimentoPaciente" {...dataNascimentoPaciente}></Input>
                <Input label="Telefone" type="number" name="telefonePaciente" {...telefonePaciente}></Input>
            </div>
            <Input label="Observações" type="text" name="observacoes" {...observacoes}></Input>
            <Button1>Cadastrar Paciente</Button1>
        </form>
    </section>
  );
};

export default CadastroPacienteForm


    

