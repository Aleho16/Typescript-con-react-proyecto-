import {Todo} from './Todo'
interface Todo {
    id: string
    title: string
    completed: boolean
}

type ListOfTodos = Todo[]
interface Props{
    todos:ListOfTodos
}
export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    />

                </li>
            ))}
        </ul>
    )
}
