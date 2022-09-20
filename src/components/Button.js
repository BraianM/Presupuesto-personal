const stylesButton = {
  backgroundColor: '#0095eb',
  color: 'white',
  border: 'none',
  padding: '10px 35px',
  fontSize: '1em',
}

const Button = ({ children }) => <button style={stylesButton}>{children}</button>

export default Button;
