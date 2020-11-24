// src/common/Layout/Interactables.js

export const Button = (props) => {
  const {label, fn} = props

  return (
    <button onClick={e => {
      e.preventDefault()
      fn()
    }}>
      {label}
    </button>
  )
}