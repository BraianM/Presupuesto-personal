import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import Select from "./Select";

const stylesDiv = {
  marginBottom: '10px',
}

const stylesForm = {
  padding: '60px',
  minWidth: '400px',
  backgroundColor: '#E7E7E7',
  margin: '0 auto',
}

const contenButton = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '20px',
}

const Formulario = () => {
  return (
    <form style={stylesForm}>
        <div>
          <div style={stylesDiv}><Label>Concepto: </Label></div>
          <Input type="text" id="input-0" name="concepto" />
        </div>
        <div>
          <div style={stylesDiv}><Label>Fecha: </Label></div>
          <Input type="date" id="input-1" name="fecha" />
        </div>
        <div>
          <div style={stylesDiv}><Label>Tipo </Label></div>
          <Select  id={'input-2'} name={'tipo'}/>
        </div>
        <div>
          <div style={stylesDiv}><Label>Monto: </Label></div>
          <Input type="number" id="input-3" name="monto" />
        </div>
        <div style={contenButton}>
          <Button>Ingresar</Button>
          <Button>Cancelar</Button>
        </div>
    </form>
  )
}

export default Formulario;
