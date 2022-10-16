import Button from './../Button'

const td = ({wh='100px', alg='center'}) =>({ 
  padding: '8px',
  boxSizing: 'border-box',
  width: wh,
  textAlign: alg,
})

const thRow = ({ color='#fffff' }) => ({
  backgroundColor: color
})

const styleButton = ({bg='#0095eb'}) => ({
  backgroundColor: bg,
  padding: '4px 8px',
  fontWeight: 'bold',
  borderRadius: '5px',
})

const DataList = ({ parOrImpar, concept, date, type, amount }) => {
  const setColorRow = (value) => {
    if (value % 2) {
      return '#ffffff'
    } else {
      return '#f2f2f2'
    }
  }
  const container = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
  return (
    <tr>
      <td style={{...td({wh:'250px', alg:'left'}), ...thRow({color: setColorRow(parOrImpar)})}}>{concept}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{date}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{type}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>{amount}</td>
      <td style={{...td({}), ...thRow({color: setColorRow(parOrImpar)})}}>
        <div style={container}>
          <Button 
            styleModify={styleButton({})}
            colorMouseEnter={'rgba(0, 149, 235, 0.8)'}
            colorMouseLeave={'rgba(0, 149, 235, 1)'}
          >
          {'M'}
          </Button>
          <Button
            styleDelete={styleButton({bg:'rgba(220, 0, 0, 1)'})}
            colorMouseEnter={'rgba(225, 0, 0, 0.8)'}
            colorMouseLeave={'rgba(220, 0, 0, 1)'}
          >
          {'D'}
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default DataList;
