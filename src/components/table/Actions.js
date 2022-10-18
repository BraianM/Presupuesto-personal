import Button from './../Button'

const container = {
  display: 'flex',
  justifyContent: 'space-evenly',
}

const styleButton = ({bg='#0095eb'}) => ({
  backgroundColor: bg,
  padding: '4px 8px',
  fontWeight: 'bold',
  borderRadius: '5px',
})

const editAndDelete = (id, deleteOperation, setAction) => (
  <div style={container}>
    <Button 
      id={id}
      onClick={() => setAction('edit')}
      styleModify={styleButton({})}
      colorMouseEnter={'rgba(0, 149, 235, 0.8)'}
      colorMouseLeave={'rgba(0, 149, 235, 1)'}
    >
    {'Editar'}
    </Button>
    <Button
      id={id}
      onClick={() => deleteOperation(id)}
      styleDelete={styleButton({bg:'rgba(220, 0, 0, 1)'})}
      colorMouseEnter={'rgba(225, 0, 0, 0.8)'}
      colorMouseLeave={'rgba(220, 0, 0, 1)'}
    >
    {'Eliminar'}
    </Button>
  </div>
)

const edit = (setAction) => (
  <div style={container}>
    <Button 
      //id={id}
      onClick={() => setAction('notEdit')}
      styleModify={styleButton({})}
      colorMouseEnter={'rgba(0, 149, 235, 0.8)'}
      colorMouseLeave={'rgba(0, 149, 235, 1)'}
    >
    {'Actualizar'}
    </Button>
    <Button
      //id={id}
      onClick={() => setAction('notEdit')}
      styleDelete={styleButton({bg:'rgba(220, 0, 0, 1)'})}
      colorMouseEnter={'rgba(225, 0, 0, 0.8)'}
      colorMouseLeave={'rgba(220, 0, 0, 1)'}
    >
    {'Cancelar'}
    </Button>
  </div>
)

const Actions = ({id, deleteOperation, hookAction }) => {
  const {action, setAction} = hookAction
  return (
    <div>
    {action === 'notEdit' && editAndDelete(id, deleteOperation, setAction)}
    {action === 'edit' && edit(setAction)}
    </div>
  )
}

export default Actions
