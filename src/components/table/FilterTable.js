import { useState } from 'react'
import Label from './../Label'
import Filter from './Filter'

const styleFilterTable = {
  display: 'flex',
  width: '1000px',
  padding: '15px 20px',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#E7E7E7',
}

const styleSelect = {
  width: '200px',
  backgroundColor: 'white',
  border: 'none',
  padding: '10px',
  fontSize: '1em',
  color: '#525c66',
  resize: 'none',
  boxSizing: 'border-box',
  resize: 'none',
}

const contentSelect = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '300px',
}

const FilterTable = () => {
  const [option, setOption] = useState('Concepto')

  const handleChange = ({target}) => {
    const { value } = target
    setOption(value)
  }
  return (
    <div style={styleFilterTable}>
      <div style={contentSelect}>
        <Label>Filtar por:</Label>
        <select style={styleSelect} onChange={handleChange}>
          <option>Concepto</option>
          <option>Fecha</option>
          <option>Tipo</option>
        </select> 
      </div>
      <Filter option={option} />
    </div>
  )
}

export default FilterTable
