import { useTodos } from '../store/Todos'
import { useSearchParams } from 'react-router-dom';

function Todos() {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

    const [ searchParams ] = useSearchParams();

    const todosData = searchParams.get('todos');
    console.log('todosData: ', todosData);
    

    let filterTodos = todos;

    if (todosData === "active"){
        filterTodos = filterTodos.filter((task) => !task.completed )
    }

    if (todosData === "completed"){
        filterTodos = filterTodos.filter((task) => task.completed )
    }

  return (
    <ul className='main-task'>
        { filterTodos.map((todo) => {
            return <li key={todo.id}>
                <input
                    type='checkbox'
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onChange={() => toggleTodoAsCompleted(todo.id)}
                />
                <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>
                {
                    todo.completed && (
                        <button
                            type='button'
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    )
                }
            </li>
        }) }
    </ul>
  )
}

export default Todos