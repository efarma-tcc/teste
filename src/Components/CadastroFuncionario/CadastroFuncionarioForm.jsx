import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroFuncionarioForm.module.css';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';
import Input3 from '../Forms/Input3';

const CadastroFuncionarioForm = () => {
    const nomeFuncionario = useForm();
    const cpf = useForm();
    const dataNascimento = useForm();
    const telefone = useForm();
    const email = useForm();
    const senhaGenerica = useForm();
    const crm = useForm();
    const [select, setSelect] = React.useState('');
    
  return (
    <section className="animeLeft">
        <div className={styles.containerTitulo}>
            <h1 className="title2 text-3xl font-semibold m-2 ">Cadastro de Funcionários</h1>
        </div>
      
      <form className={styles.formcontainerF}>
        <div className={styles.formrow}>
          <Input2 label="Nome Completo" type="text" name="nomeFuncionario" {...nomeFuncionario}/>
          <Input4 label="CPF" type="number" name="cpf" {...cpf}/>
        </div>
        <div className={styles.formrow}>
          <Input2 label="E-mail" type="email" name="email" {...email}/>
          <Input label="Data Nascimento" type="date" name="dataNascimento" {...dataNascimento}/>
          <Input label="Telefone" type="number" name="telefone" {...telefone}/>
        </div>
        <label htmlFor="cargoSelect" className={styles.label}>Cargo</label>
        <div className={styles.formrow}>
            <select id="cargoSelect" className={styles.select} value={select} onChange={({target}) => setSelect(target.value)}>
                <option disabled value="">Selecione</option>
                <option value="medico">Médico</option>
                <option value="paciente">Paciente</option>
                <option value="estoquista">Estoquista</option>
                <option value="enfermeiro">Enfermeiro</option>
                <option value="farmaceutico">Farmacêutico </option>
                <option value="administrador">Administrador</option>
            </select>
            <Input4 label="CRM (para médicos)" className={styles.input} type="text" name="crm" {...crm}/>
        </div>
        <div className={styles.formrow1}>  
            <Input4 label="Senha Genérica (CPF Funcionário)" type="text" name="senhaGenerica" {...senhaGenerica}/>
            
        </div>
        <Button1>Cadastrar Funcionário</Button1>
      </form>
    </section>
  );
};

export default CadastroFuncionarioForm;