const stylesButton = ({bg='#ddddd', col= '#00000', bor='none', pad='0', fontS='1em'}) =>({
  backgroundColor: bg,
  color: col,
  border: bor,
  padding: pad,
  fontSize: fontS,
}) 
const Button = ({ children }) => {
  return (
    <button 
      style={stylesButton({bg:'#0095eb', col:'white', pad:'10px 35px'})}
    >
    {children}
    </button>
)} 

export default Button;
