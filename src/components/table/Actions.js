import Button from './../Button'
import {useContext} from 'react'
import {dataContext} from './../App'
import {filterContext} from './../Operaciones'

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

const editAndDelete = (router, setAction, deleteInData, deleteInFilter) => (
  <div style={container}>
    <Button 
      onClick={() => setAction('edit')}
      styleModify={styleButton({})}
      colorMouseEnter={'rgba(0, 149, 235, 0.8)'}
      colorMouseLeave={'rgba(0, 149, 235, 1)'}
    >
    {'Editar'}
    </Button>
    <Button
      onClick={() => router === 'home'? deleteInData() : deleteInFilter()}
      styleDelete={styleButton({bg:'rgba(220, 0, 0, 1)'})}
      colorMouseEnter={'rgba(225, 0, 0, 0.8)'}
      colorMouseLeave={'rgba(220, 0, 0, 1)'}
    >
    {'Eliminar'}
    </Button>
  </div>
)

const updateAndCancel = (router, notUpdate, updateInData, updateInFilter) => (
  <div style={container}>
    <Button 
      onClick={() => router === 'home'? updateInData() : updateInFilter()}
      styleModify={styleButton({})}
      colorMouseEnter={'rgba(0, 149, 235, 0.8)'}
      colorMouseLeave={'rgba(0, 149, 235, 1)'}
    >
    {'Actualizar'}
    </Button>
    <Button
      onClick={() => notUpdate()}
      styleDelete={styleButton({bg:'rgba(220, 0, 0, 1)'})}
      colorMouseEnter={'rgba(225, 0, 0, 0.8)'}
      colorMouseLeave={'rgba(220, 0, 0, 1)'}
    >
    {'Cancelar'}
    </Button>
  </div>
)

const Actions = ({router, id, hookAction, valuesInput}) => {
  const {action, setAction} = hookAction
  const {filter, setFilter} = useContext(filterContext)
  const {data, setData} = useContext(dataContext)

  const updateInData = () => {
    const myFilter = data.map((elem) => elem.id === valuesInput.id ? elem = valuesInput : elem)
    setData(myFilter)
    notUpdate()
  }

  const updateInFilter = () => {
    const myFilter = filter.map((elem) => elem.id === valuesInput.id ? elem = valuesInput : elem)
    setFilter(myFilter)
    updateInData()
  }

  const notUpdate = () => setAction('notEdit')

  const deleteInData = () => {
    const myFilter = data.filter((elm) => elm.id !== id)
    setData(myFilter)
  }
  
  const deleteInFilter = () => {
    const myFilter = filter.filter((elm) => elm.id !== id)
    setFilter(myFilter)
    deleteInData(id)
  }

  return (
    <div>
      {action === 'notEdit' && editAndDelete(router, setAction, deleteInData, deleteInFilter)}
      {action === 'edit' && updateAndCancel(router, notUpdate, updateInData, updateInFilter)}
    </div>
  )
}

export default Actions
