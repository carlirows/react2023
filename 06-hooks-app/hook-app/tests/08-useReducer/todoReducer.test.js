import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('test in todoReduce', () => { 
    const initialState = [{
        id: 1,
        description: 'Learn React',
        done: false
    }]
    
    test('should return initial state', () => { 
        const newState = todoReducer(initialState, {})
        expect(newState).toEqual(initialState)

     })

        test('should add a new todo', () => {
            const newTodo = {
                id: 2,
                description: 'Learn Node',
                done: false
            }
            const action = {
                type: '[TODO] Add Todo',
                payload: newTodo
            }
            console.log(initialState)
            const newState = todoReducer(initialState, action)
            console.log(newState)
            expect(newState.length).toBe(2)
            expect(newState).toContain(newTodo)
        })

        test('should delete a todo', () => {
            const action = {
                type: '[TODO] Remove Todo',
                payload: 1
            }
            const newState = todoReducer(initialState, action)
            expect(newState.length).toBe(0)
        })

        test('should toggle a todo', () => {
            const action = {
                type: '[TODO] Toggle Todo',
                payload: 1
            }
            const newState = todoReducer(initialState, action)
            expect(newState[0].done).toBe(true)
        })
 })