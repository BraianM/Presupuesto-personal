import { useState } from 'react'
import Label from './../Label'
import Input from './../Input'
const FilterTable = () => {
  const [option, setOption] = useState('Concepto')

  const filterConcept = <div><Input /></div>

  const filterDate = (
    <div>
      <Label>Desde:</Label>
      <Input />
      <Label>Hasta:</Label>
      <Input />
    </div>
  )

  const filterType = (
    <div>
      <Input />
      <Input />
    </div>
  )

  const handleChange = ({target}) => {
    const { value } = target
    setOption(value)
  }
  const filters = [filterConcept, filterDate, filterType] 
  console.log(option)
  return (
    <div>
      <Label>Buscar:</Label>
      <select onChange={handleChange}>
        <option>Concepto</option>
        <option>Fecha</option>
        <option>Tipo</option>
      </select> 
    </div>
  )
}

export default FilterTable
