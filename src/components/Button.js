const stylesButton = ({bg='#ddddd', col= '#00000', bor='none', pad='0', fontS='1em'}) =>({
  backgroundColor: bg,
  color: col,
  border: bor,
  padding: pad,
  fontSize: fontS,
  cursor: 'pointer',
}) 

const styleMouseEnter = ({target}, rgba) => {
  target.style.backgroundColor = rgba
}

const styleMouseLeave = ({target}, rgba) => {
  target.style.backgroundColor = rgba
}

const Button = ({children, chooseTheme, styleModify, styleDelete, colorMouseEnter, colorMouseLeave}) => {

  return (
    <button 
      style={{...stylesButton({bg:'#0095eb', col:'white', pad:'10px 35px'}), ...styleModify, ...styleDelete}}
      onClick={chooseTheme}
      onMouseEnter={(e) => styleMouseEnter(e, colorMouseEnter)}
      onMouseLeave={(e) => styleMouseLeave(e, colorMouseLeave)}
    >
    {children}
    </button>
)} 

export default Button;
