import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroRemedioForm.module.css';

const CadastroRemedioForm = () => {
    const nomeRemedio = useForm();
    const dosagem = useForm();
    const unimedida = useForm();

  return (
    <section className="animeLeft">
        <div className={styles.containerTituloR}>
            <h1 className="title">Cadastro de Remédios</h1>
        </div>
        <form className={styles.formcontainerR}>
        <Input label="Nome do Remédio" type="text" name="nomeRemedio" {...nomeRemedio}></Input>
        <div className={styles.formrowR}>
            <Input label="Dosagem" type="number" name="dosagem" {...dosagem}></Input>
            <Input label="Unidade de Medida" type="number" name="unimedida" {...unimedida}></Input>
        </div>
        <Button>Cadastrar Remédio</Button>
        </form>
    </section>
  )
}

export default CadastroRemedioForm