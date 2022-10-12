
const td = ({wh='100px', alg='center'}) =>({ 
  padding: '8px',
  boxSizing: 'border-box',
  width: wh,
  textAlign: alg,
})

const thRow = ({ color='#fffff' }) => ({
  backgroundColor: color
})

const DataList = ({ parOrImpar, concept, date, type, amount }) => {
  const setColorRow = (value) => {
    if (value % 2) {
      return '#ffffff'
    } else {
      return '#f2f2f2'
    }
  }

  return (
    <tr>
      <td style={{...td({wh:'250px', alg:'left'}), ...thRow({color: setColorRow(parOrImpar)})}}>{concept}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{date}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{type}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{amount}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}></td>
    </tr>
  )
}

export default DataList;
