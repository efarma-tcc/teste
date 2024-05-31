import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CadastroPacienteForm from './CadastroPacienteForm';
import styles from './CadastroPaciente.module.css';

const CadastroPaciente = () => {
  return (
    <section className={styles.cadastropaciente}>
        <div>
            <Routes className={styles.formpaciente}>
                <Route path="/" element={<CadastroPacienteForm />}></Route>
            </Routes>
        </div>
    </section>
  )
}

export default CadastroPaciente