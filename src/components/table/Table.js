import { useContext } from 'react';
import { dataContext } from './../App';
import DataList from './DataList'

const styleThead = {
  border: '1px solid #ddd'
}

const Table = () => {
  const { data } = useContext(dataContext)
  console.log(data)
  const list = data.map((d) => (
    <DataList 
      concept={d.concept}
      date={d.date}
      type={d.type}
      amount={d.amount}
    />
  ))
  return (
    <table style={styleThead}>
      <thead >
        <tr>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Monto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  )
}

export default Table;
