import { fireEvent, render , screen} from '@testing-library/react'
import { Todo } from '../../src/08-useReducer/Todo'

describe('tests in component <Todo/>', () => { 
    const todo = {
        id: 1,
        description: 'Aprender React',
        done: false
    }
    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('should  display Todo pending on completion', () => { 
        render (
            <Todo 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
            );
        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
        screen.debug()            
     })

     test('should should display completed Todo', () => { 
        todo.done = true
        render (
            <Todo 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
            );
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
      })

        test('should call onToggleTodo function', () => {
            render (
                <Todo 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock}
                />
                );
            const spanElement = screen.getByLabelText('span')
            fireEvent.click(spanElement)
            // spanElement.click()
            expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
        })

        test('should call onDeleteTodo function', () => {
            render (
                <Todo 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock}
                />
                );
            const buttonElement = screen.getByRole('button')
            fireEvent.click(buttonElement)
            // buttonElement.click()
            expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
        })
 })