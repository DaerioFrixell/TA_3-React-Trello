// import { useEffect } from 'react'
// import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Todo } from '../../model/todo/todoTypes'

export const TodoList = () => {
  const { todos, loading, error } = useTypedSelector(state => state.todo)
  // const { fetchTodos } = useAction()

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h2>TodoList</h2>
      {(todos as Todo[]).map(
        (todo, key) =>
          <div key={todo.id}>
            {todo.id + ". "}
            {todo.title}
          </div>)}
    </>
  )
}