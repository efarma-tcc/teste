import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroFuncionarioForm from './CadastroFuncionarioForm';
import styles from './CadastroFuncionario.module.css';


const CadastroFuncionario = () => {
  return (
    <section className={styles.cadastrofuncionario}>
      <div>
        <Routes className={styles.formfuncionario}>
        <Route path="/" element={<CadastroFuncionarioForm />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default CadastroFuncionario;