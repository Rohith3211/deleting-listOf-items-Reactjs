import './index.css'

const TodoItem = props => {
  const {details, onDelete} = props
  const {id, title} = details

  const deleteItems = () => {
    onDelete(id)
  }

  return (
    <li className="card">
      <p>{title}</p>
      <button onClick={deleteItems}>Delete</button>
    </li>
  )
}

export default TodoItem
