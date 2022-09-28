
const stylesSelect = {
  marginBottom: '15px',
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: 'none',
  color: '#525c66',
  fontSize: '1em',
  resize: 'none',
  backgroundColor: 'white',
}

const Select = ({ id, name, handleChange }) => {
  return (
    <select onChange={handleChange} style={stylesSelect} id={id} name={name}>
      <option value=""></option>
      <option>Ingreso</option>
      <option>Egreso</option>
    </select>
  )
}

export default Select;
