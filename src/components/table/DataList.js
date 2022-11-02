import Input from './../Input'
import Actions from './Actions'
import {useState} from 'react'

const td = ({wh='100px', alg='center'}) =>({ 
  padding: '8px',
  boxSizing: 'border-box',
  width: wh,
  textAlign: alg,
})

const thRow = ({ color='#fffff' }) => ({
  backgroundColor: color
})

const styleInput = ({wh='100%', pad='5px', marg='0px'}) => ({ 
  width: wh,
  border: '1px solid #ddd',
  margin: marg,
  padding: pad, 
  boxSizing: 'border-box',
  type: 'text',
}) 

const DataList = ({router, id, parOrImpar, concept, date, type, amount}) => {
  const [action, setAction] = useState('notEdit')
  const [valuesInput, setInput] = useState({id: id, concept: concept, date: date, type: type, amount: amount})

  const handleChange = ({target}) => {
    const {name, value} = target
    setInput({...valuesInput, [name]: value})
  }

  const setColorRow = (value) => {
    if (value % 2) {
      return '#ffffff'
    } else {
      return '#f2f2f2'
    }
  }
  
  return (
    <tr>
      <td style={{...td({wh:'250px', alg:'left'}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {action === 'notEdit' && concept}
        {action === 'edit' && <Input handleChange={handleChange} name={'concept'} value={concept} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {action === 'notEdit' && date}
        {action === 'edit' && <Input handleChange={handleChange} name={'date'} value={date} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {type}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {action === 'notEdit' && amount}
        {action === 'edit' && <Input handleChange={handleChange} name={'amount'} value={amount} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        <Actions router={router} id={id} hookAction={{action, setAction}} valuesInput={valuesInput} />
      </td>
    </tr>
  )
}

export default DataList;
