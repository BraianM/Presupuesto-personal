
const stylesSelect = {
  marginBottom: '15px',
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: 'none',
  color: '#525c66',
  fontSize: '1em',
  resize: 'none',
}

const Select = ({ id, name }) => {
  return (
    <select style={stylesSelect} id={id} name={name}>
      <option value="ingreso">Ingreso</option>
      <option value="egreso">Egreso</option>
    </select>
  )
}

export default Select;
