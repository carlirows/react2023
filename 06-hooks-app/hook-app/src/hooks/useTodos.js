import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodos = () => {

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


    const [todos, dispatch] = useReducer(todoReducer, [], init)

    
    useEffect(() => {
        //take the initial state and send it to localStorage
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])
    
    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
       
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })  
    }

    const handleToggleTodo = (id) => {
        // console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo
    }
}



