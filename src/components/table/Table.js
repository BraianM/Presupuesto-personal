import { useContext } from 'react';
import { dataContext } from './../App';
import DataList from './DataList'


const table = ({ wd='400px', ff='Arial, Helvetica, sans-serif' }) => ({
  fontFamily: ff,
  width: wd,
  borderCollapse: 'collapse',
  border: '1px solid #ddd',
  margin: '10px',
})

const headTh = ({ pad='0', txtAlign='left', bg='#00000', col='#fffff' }) => ({
  padding: pad,
  textAlign: txtAlign,
  backgroundColor: bg,
  color: col,
  border: '1px solid #ddd',
})

const tdAndTh = ({ pad='0px' }) => ({
  padding: pad,
})

const thRow = ({ color='#fffff' }) => ({
  backgroundColor: color
})


const Table = () => {
  const { data } = useContext(dataContext)

  const setColorRow = (parOrImpar) => {
    if (parOrImpar % 2) {
      return '#ffffff'
    } else {
      return '#f2f2f2'
    }
  }

  const list = data.map((d, i) => (
    <DataList 
      key={d.id}
      concept={d.concept}
      date={d.date}
      type={d.type}
      amount={d.amount}
      tdAndTh={tdAndTh}
      thRow={thRow}
      colorRow={setColorRow(i)}
    />
  ))
  return (
    <table style={table({ wd:'1000px' })}>
      <thead >
        <tr>
          <th style={{...tdAndTh({ pad:'8px' }), ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Concepto</th>
          <th style={{...tdAndTh({ pad:'8px' }), ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Fecha</th>
          <th style={{...tdAndTh({ pad:'8px' }), ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Tipo</th>
          <th style={{...tdAndTh({ pad:'8px' }), ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Monto</th>
          <th style={{...tdAndTh({ pad:'8px' }), ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Acciones</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  )
}

export default Table;
