import {useState} from 'react'
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

const ViewFilter = ({data, getFilter}) => {
  const [option, setOption] = useState('Concepto')

  const handleChange = ({target}) => {
    const { value } = target
    setOption(value)
    getFilter(data)
  }

  const setFilter = (value, valueDate) => {
    const myFilter = data.filter((e) => e.concept.toLowerCase().substring(0, value.length).includes(value.toLowerCase()) || valueDate(e.date) || e.type === value)
    getFilter(myFilter)
  }

  return (
    <div style={styleFilterTable}>
      <div style={contentSelect}>
        <Label>Filtar por:</Label>
        <select style={styleSelect} onChange={handleChange} >
          <option>Concepto</option>
          <option>Fecha</option>
          <option>Tipo</option>
        </select> 
      </div>
      <Filter setFilter={setFilter} option={option} />
    </div>
  )
}

export default ViewFilter
