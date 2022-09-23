import { useState } from 'react';
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
  const [input, setInput] = useState({
    concept:'',
    date:'',
    type:'',
    amount:'',
  })
  const [errors, setErrors] = useState({})

  const validate = (values) => {
    const errors = {}
    if(!values.concept) {
      errors.concept = '* Campo obligatorio'
    }else if(!/[^0-9]+[^*._+]/.test(values.concept)) {
      errors.concept = '* Ingrese solo datos alfanumericos'
    }
    if(!values.date) {
      errors.date = '* Campo obligatorio'
    }
    if(!values.type) {
      errors.type = '* Campo obligatorio'
    }
    if(!values.amount) {
      errors.amount = '* Campo obligatorio'
    }else if (!/[0-9]/.test(values.amount)) {
      errors.amount = '* Ingrese solo datos númericos'
    }
    return errors
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setInput({...input, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = validate(input)
    setErrors(result)
    if(!Object.keys(result).length) {
      console.log('Mensaje enviado')
      e.target.reset()
      console.log(input)
    }
  }

  return (
    <form style={stylesForm} onSubmit={handleSubmit}>
        <div>
          <div style={stylesDiv}><Label>Concepto: </Label></div>
          <Input handleChange={handleChange} type="text" id="input-0" name="concept" />
          {errors.concept && <p>{errors.concept}</p>}
        </div>
        <div>
          <div style={stylesDiv}><Label>Fecha: </Label></div>
          <Input handleChange={handleChange} type="date" id="input-1" name="date" />
          {errors.date && <p>{errors.date}</p>}
        </div>
        <div>
          <div style={stylesDiv}><Label>Tipo </Label></div>
          <Select handleChange={handleChange} id={'input-2'} name={'type'}/>
          {errors.type && <p>{errors.type}</p>}
        </div>
        <div>
          <div style={stylesDiv}><Label>Monto: </Label></div>
          <Input handleChange={handleChange} type="text" id="input-3" name="amount" />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <div style={contenButton}>
          <Button>Ingresar</Button>
          <Button>Cancelar</Button>
        </div>
    </form>
  )
}

export default Formulario

