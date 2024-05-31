import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CadastroReceitaForm from './CadastroReceitaForm';
import styles from './CadastroReceita.module.css';

const CadastroReceita = () => {
  return (
    <section className={styles.cadastroreceita}>
        <div>
            <Routes className={styles.formReceita}>
                <Route path="/" element={<CadastroReceitaForm />}></Route>
            </Routes>
        </div>
    </section>
  )
}

export default CadastroReceita

