import {useContext} from 'react'
import {dataContext} from './../App'
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
    <Input handleChange={(e) => onChange(e)} name='concept' inputFilter={ inputFilter({wh:'505px'}) } type='text' />
  </div>
) 

const date = (value) => (
  <div style={contentFilter}>
    <Label>Desde</Label>
    <Input inputFilter={inputFilter({marg:'0px 10px'})} type='date' />
    <Label>hasta</Label>
    <Input inputFilter={inputFilter({marg:'0px 10px'})} type='date' />
  </div>
)

const type = (value) => (
  <div style={contentFilter}>
    <div>
      <Input inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 0px'})} type={'radio'}  />
      <Label>Ingreso & Egreso</Label>
    </div>
    <div>
      <Input inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 30px'})} type={'radio'} />
      <Label>Ingreso</Label>
    </div>
    <div>
      <Input inputFilter={inputFilter({wh:'15px', marg:'0px 10px 0px 30px'})} type={'radio'}  />
      <Label>Egreso</Label>
    </div>
  </div>
)

const Filter = ({ option }) => {
  const {data, setData} = useContext(dataContext)

  const handleChange = ({target}) => {
    const {name, value} = target
    console.log(name, value)
  }
  return (
    <div>
      {option === 'Concepto' && concept(handleChange)}
      {option === 'Fecha' && date()}
      {option === 'Tipo' && type()}
    </div>
  )
}

export default Filter
