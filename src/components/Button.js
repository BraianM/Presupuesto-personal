const stylesButton = {
  backgroundColor: '#0095eb',
  color: 'white',
  border: '0',
  padding: '10px 45px',
}

const Button = ({ children }) => <button style={stylesButton}>{children}</button>

export default Button;
