const stylesInput = {
  marginBottom: '15px',
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: 'none',
  color: '#525c66',
  fontSize: '1em',
  resize: 'none',
}

const Input = ({ inputFilter, type, id, name, handleChange, value, checked }) => {
  return (
    <input
      onChange={handleChange}
      value={value}
      style={{...stylesInput, ...inputFilter}}
      type={type}
      id={id}
      name={name}
      defaultChecked={checked}
      autoComplete={'off'}
    />
  )
} 

export default Input;
