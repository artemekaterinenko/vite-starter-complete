import { useTodoStore } from '@/features/todos'

export function Todos() {
  const todos = useTodoStore(state => state.todos)
  const toggleTodo = useTodoStore(state => state.toggleTodo)

  return (
    <div>
      <ul>
        {Object.values(todos).map(todo => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.done ? <s>{todo.title}</s> : todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
