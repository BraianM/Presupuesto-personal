const DataList = ({ concept, date, type, amount }) => {
  return (
    <tr>
      <td>{concept}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default DataList;
