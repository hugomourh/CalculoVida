'use client'
import  { useState } from 'react';
import Formulario from './Componentes/formulario';
import Resultado from './Componentes/Resultado';
 
 export default function App() {
  const [opcao, setOpcao] = useState('');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const manipularDados = () => {
    let resultadoFinal = '';

    if (opcao === 'dias') {
      resultadoFinal = `Você já viveu ${valor * 365} dias.`;
    } else if (opcao === 'meses') {
      resultadoFinal = `Você já viveu ${valor * 12} meses.`;
    } else if (opcao === 'semanas') {
      resultadoFinal = `Você já viveu ${valor * 52} semanas.`;
    } else if (opcao === 'segundos') {
      resultadoFinal = `Você já viveu ${valor * 365 * 24 * 60 * 60} segundos.`;
    } else if (opcao === 'milisegundos') {
      resultadoFinal = `Você já viveu ${valor * 365 * 24 * 60 * 60 * 1000} milissegundos.`;
    } else {
      resultadoFinal = 'Por favor, escolha uma opção válida.';
    }

    setResultado(resultadoFinal);
  };

  return (
    <div>
      <Formulario 
        opcao={opcao} 
        valor={valor} 
        setOpcao={setOpcao} 
        setValor={setValor} 
        manipularDados={manipularDados} 
      />
      <Resultado resultado={resultado} />
    </div>
  );
}
  

  
