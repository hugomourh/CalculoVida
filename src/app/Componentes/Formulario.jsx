'use client'
import estilo from './Formulario.module.css'
import Resultado from './Resultado';

import React from 'react';

export default function Formulario({ opcao, valor, setOpcao, setValor, manipularDados }) {
  return (
    <>
    <div className={estilo.formulario}>
    <form className={estilo.form}>
      <label className={estilo.label} htmlFor="opcao">Escolha uma opção:</label> 
      <select id="opcao" value={opcao} onChange={(e) => setOpcao(e.target.value)} required>
        <option value="">Escolha uma opção</option>
        <option value="dias">Quantos dias já viveu</option>
        <option value="meses">Quantos meses já viveu</option>
        <option value="semanas">Quantas semanas já viveu</option>
        <option value="segundos">Quantos segundos já viveu</option>
        <option value="milisegundos">Quantos milissegundos já viveu</option>
      </select>


    
      
      <label htmlFor="valor">Digite sua idade:</label>
      <input 
        type="number"
        id="valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      
      <button  type="button" onClick={manipularDados} className={estilo.botao} >Calcular</button>

      
      
    </form>
    



    
</div>

    
  
    </>
  )
}