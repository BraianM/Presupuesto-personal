import React from 'react';
import '../estilos/Resultante.css';

const styleP = ({myColor= '#FF00'}) => ({
  color: myColor,
  fontSize: '4.5em',
})

function Resultanteactual ({ data }) {
  const incomeFilter = data.filter((op) => op.type === 'Ingreso')
  const egressFilter = data.filter((op) => op.type === 'Egreso')

  const sumIncome = () => {
    let result = 0
    incomeFilter.forEach((e) => result += parseInt(e.amount))
    return result
  }

  const sumEgress = () => {
    let result = 0
    egressFilter.forEach((e) => result += parseInt(e.amount))
    return result
  }

  const getCurrentBalance = () => sumIncome() - sumEgress()
  const setColorP = () => getCurrentBalance() ? '#0095eb' : '#FF0000'
  return (
   <div className='contenedor-actual'>
     <div className='contenedor-texto'>
       <p style={styleP({myColor: setColorP()})} className='dinero-resultante'>{'$' + getCurrentBalance() + '.00'}</p>
     </div>
   </div>
  );
}
export default Resultanteactual;
