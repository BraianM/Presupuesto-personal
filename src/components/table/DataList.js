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

const DataList = ({deleteOperation, id, parOrImpar, concept, date, type, amount}) => {
  const [action, setAction] = useState('notEdit')

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
        {action === 'edit' && <Input value={concept} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {action === 'notEdit' && date}
        {action === 'edit' && <Input value={date} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
      {type}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        {action === 'notEdit' && amount}
        {action === 'edit' && <Input value={amount} inlyneStyle={styleInput({})} />}
      </td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        <Actions deleteOperation={deleteOperation} id={id} hookAction={{action, setAction}} />
      </td>
    </tr>
  )
}

export default DataList;
