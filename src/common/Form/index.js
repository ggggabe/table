import { createContext, useReducer, useState, useContext } from 'react'
import { FillContainer, Flex } from '../Layout'

const FormContext = createContext({
  state: {},
  dispatch: () => {}
})

export const Form = (props) => {
  const {
    children,
  } = props

  const [state, dispatch] = useReducer( (state, action) => {
    const { type, payload } = action
    const { submit, values } = state

    switch ( type ) {
    case 'update form':
      return {
        ...state,
        values: {
          ...values, 
          ...payload
        }
      }
    case 'submit form':
      submit(state.values)

      return {
        ...state
      }
    default: 
      break
    }
  })
  
  return (
    <FillContainer>
      <FormContext.Provider value={{state, dispatch}}>
        <form {...props} onSubmit={e => {
          e.preventDefault()
          dispatch()
        }}>
          {children}
        </form>
      </FormContext.Provider>
    </FillContainer>
  )
}

export const InputGroup = (props) => {
  const {name, label, placeholder = '', type = 'text'} = props

  return (
    <Flex column>
      <label for={name}>{label}</label>
      <Input type={type} name={name} placeholder={placeholder} />
    </Flex>
  )
}

export const Input = (props) => {
  const { name: field } = props
  const { dispatch, state } = useContext(FormContext)
  const [value, setValue] = useState(state.values[field] || '')


  return (
    <input {...props} value={value} onChange={e => {
      e.preventDefault()
      setValue(value)
    }} onBlur={e => {
      dispatch({
        type: 'update form',
        payload: {
          [field]: value
        }
      })
    }} />
  )
}