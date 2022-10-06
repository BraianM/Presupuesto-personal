import Label from './../Label'
import Input from './../Input'

const inputFilter = ({wh='200px', pad='10px', marg='0px'}) => ({ 
  width: wh,
  margin: marg,
  padding: pad, 
  boxSizing: 'border-box',
}) 

const contentFilter = {
  width: '515px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
}

const concept = (onChange) => (
  <div style={contentFilter}>
    <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({wh:'505px'})} name='concept' type='text' />
  </div>
) 

const date = (onChange) => (
  <div style={contentFilter}>
    <Label>Desde</Label>
    <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({marg:'0px 10px'})} name={'date'} type='date' />
    <Label>hasta</Label>
    <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({marg:'0px 10px'})} name={'date'} type='date' />
  </div>
)

const type = (onChange, checked) => (
  <div style={contentFilter}>
    <div>
      <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 0px'})} value={''} name={'type'} type={'radio'} checked={checked()} />
      <Label>Ingreso & Egreso</Label>
    </div>
    <div>
      <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 30px'})} value={'Ingreso'} name={'type'} type={'radio'} />
      <Label>Ingreso</Label>
    </div>
    <div>
      <Input handleChange={(e) => onChange(e)} inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 30px'})} value={'Egreso'} name={'type'} type={'radio'}  />
      <Label>Egreso</Label>
    </div>
  </div>
)

const Filter = ({ option, getFilter }) => {

  const handleChange = ({target}) => {
    const {name, value} = target
    if(name === 'date') {
      console.log('Filtrando por fecha')
    } else {
      getFilter(value)
    }
  }

  const checked = () => {
    getFilter('')
    return true
  }

  return (
    <div>
      {option === 'Concepto' && concept(handleChange)}
      {option === 'Fecha' && date(handleChange)}
      {option === 'Tipo' && type(handleChange, checked)}
    </div>
  )
}

export default Filter
