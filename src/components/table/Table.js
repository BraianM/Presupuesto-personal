import DataList from './DataList'

const table = ({ wd='400px', ff='Arial, Helvetica, sans-serif' }) => ({
  fontFamily: ff,
  width: wd,
  borderSpacing: '0',
  border: '1px solid #ddd',
  margin: '10px',
})

const headTh = ({ pad='0', bg='#00000', col='#fffff', alg='center' }) => ({
  padding: pad,
  backgroundColor: bg,
  color: col,
  textAlign: alg,
})

const th = { 
  padding: '8px',
  borderLeft: '1px solid #ddd',
}

const Table = ({router, list}) => {
  const rows = (array) => array.map((elem, index) => <DataList router={router} id={elem.id} key={index} concept={elem.concept} date={elem.date} type={elem.type} amount={elem.amount} parOrImpar={index} />)

  return (
    <table style={table({ wd:'1000px' })}>
      <thead >
        <tr>
          <th style={{...th, ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Concepto</th>
          <th style={{...th, ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Fecha</th>
          <th style={{...th, ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Tipo</th>
          <th style={{...th, ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Monto</th>
          <th style={{...th, ...headTh({ pad:'12px', bg:'#0095eb', col:'white' })}}>Acciones</th>
        </tr>
      </thead>
      <tbody>{rows(list)}</tbody>
    </table>
  )
}

export default Table;
