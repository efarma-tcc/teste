import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroFuncionarioForm.module.css';

const CadastroFuncionarioForm = () => {
    const nomeFuncionario = useForm();
    const cpf = useForm();
    const dataNascimento = useForm();
    const telefone = useForm();
    const email = useForm();
    const [select, setSelect] = React.useState('');
    
  return (
    <section className="animeLeft">
        <div className={styles.containerTitulo}>
            <h1 className="title text-3xl font-semibold m-2 ">Cadastro de Funcionários</h1>
        </div>
      
      <form className={styles.formcontainerF}>
        <Input label="Nome Completo" type="text" name="nomeFuncionario" {...nomeFuncionario}/>    
        <div className={styles.formrow}>
            <Input label="CPF" type="number" name="cpf" {...cpf}/>
            <Input label="Data Nascimento" type="date" name="dataNascimento" {...dataNascimento}/>
            <Input label="Telefone" type="number" name="telefone" {...telefone}/>
        </div>
        <Input label="E-mail" type="email" name="email" {...email}/>
        <p>Cargo</p>
        <select className={styles.select} value={select} onChange={({target}) => setSelect(target.value)}>
            <option disabled value="">Selecione</option>
            <option value="medico">Médico</option>
            <option value="paciente">Paciente</option>
            <option value="estoquista">Estoquista</option>
            <option value="enfermeiro">Enfermeiro</option>
            <option value="farmaceutico">Farmacêutico </option>
            <option value="administrador">Administrador</option>
        </select>
        <Button>Cadastrar Funcionário</Button>
      </form>
    </section>
  );
};

export default CadastroFuncionarioForm;