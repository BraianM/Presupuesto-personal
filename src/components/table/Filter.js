import Label from './../Label'

const divFilters = {
  width: '600px',
}

const contentFilter = ({ wh='600px', justCont='none' }) =>({
  display: 'flex',
  alignItems: 'center',
  width: wh,
  justifyContent: justCont,
})

const styleInput = ({wh='200px'}) => ({
  width: wh,
  padding: '10px',
  border: 'none',
  fontSize: '1em',
  color: '#525c66',
  resize: 'none',
  boxSizing: 'border-box',
  resize: 'none',
})

const Filter = ({ option }) => {
  const filterConcept = (
    <div style={contentFilter({wh:'600px', justCont:'space-evenly'})}>
      <Label>Buscar:</Label>
      <input style={styleInput({ wh: '510px' })} type='text' />
    </div>
  ) 

  const filterDate = (
    <div style={contentFilter({justCont: 'space-evenly'})}>
      <Label>Buscar: desde</Label>
      <input style={styleInput({})} type='date' />
      <Label>hasta</Label>
      <input style={styleInput({})} type='date' />
    </div>
  )

  const filterType = (
    <div style={contentFilter({justCont: 'space-around', wh:'445px'})}>
      <Label>Buscar:</Label>
      <div>
      <input type={'radio'}  />
      <Label>Ingreso & Egreso</Label>
      </div>
      <div>
      <input type={'radio'} />
      <Label>Ingreso</Label>
      </div>
      <div>
      <input type={'radio'}  />
      <Label>Egreso</Label>
      </div>
    </div>
  )
  return (
    <div style={divFilters}>
      {option === 'Concepto' && filterConcept}
      {option === 'Fecha' && filterDate}
      {option === 'Tipo' && filterType}
    </div>
  )
}

export default Filter
