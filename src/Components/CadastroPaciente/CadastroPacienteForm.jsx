import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroPacienteForm.module.css';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';
import InputTw from '../Forms/InputTw';
import ButtonTw from '../Forms/ButtonTw';


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
            <div className="flex gap-5 ">
                <div className='w-full'>
                    <InputTw label="Nome Completo do Paciente" type="text" name="nomePaciente" {...nomePaciente} className="w-full" />
                </div>
                <div>
                    <InputTw label="CPF" type="number" name="cpfPaciente" {...cpfPaciente} className="" />
                </div>
            </div>

            <div className='flex gap-5'>
                <div className='w-full'>
                    <InputTw label="E-mail" type="text" name="email" {...emailPaciente} className="w-full" />
                </div>
                <div>
                    <InputTw label="Data Nascimento" type="date" name="nomePaciente" {...dataNascimentoPaciente} className="" />
                </div>
                <div>
                    <InputTw label="Telefone" type="text" name="nomePaciente" {...telefonePaciente} className="" />
                </div>
            </div>
            <InputTw label="Observações" type="text" name="observacoes" {...observacoes} className="w-full" />
            <div className='flex justify-center'>
                <ButtonTw className="w-64" >Cadastrar Paciente</ButtonTw>

            </div>
            
        </form>
    </section>
  );
};

export default CadastroPacienteForm


    

