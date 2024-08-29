import estilo from './Resultado.module.css'
 

import React from 'react';

function Resultado({ resultado }) {
  return <p className={estilo.resultado}>{resultado}</p>;
}

export default Resultado;