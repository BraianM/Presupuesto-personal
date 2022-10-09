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
  width: '250px',
  backgroundColor: 'white',
  border: 'none',
  padding: '10px',
  fontSize: '1em',
  color: '#525c66',
  resize: 'none',
  boxSizing: 'border-box',
}

const contentSelect = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '350px',
}

const ViewFilter = ({data}) => {
  const [option, setOption] = useState('Concepto')

  const handleChange = ({target}) => {
    const { value } = target
    setOption(value)
  }

  const getFilter = (value, valueDate) => {
    const myfilter = data.filter((e) => e.concept.toLowerCase().substring(0, value.length).includes(value.toLowerCase()) || valueDate(e.date) || e.type === value)
    console.log(myfilter)
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
      <Filter getFilter={getFilter} option={option} />
    </div>
  )
}

export default ViewFilter
