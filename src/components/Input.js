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

const Input = ({ type, id, name }) => <input style={stylesInput} type={type} id={id} name={name} />

export default Input;
