
const DataList = ({ colorRow, thRow, tdAndTh, concept, date, type, amount }) => {


  return (
    <tr>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: colorRow})}}>{concept}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: colorRow})}}>{date}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: colorRow})}}>{type}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: colorRow})}}>{amount}</td>
      <td style={{...tdAndTh({pad:'8px'}), ...thRow({color: colorRow})}}></td>
    </tr>
  )
}

export default DataList;
