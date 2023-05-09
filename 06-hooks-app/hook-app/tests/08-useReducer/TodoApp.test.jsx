
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos')


describe('tests in <TodoApp />', () => { 

    useTodos.mockReturnValue({
        todos:[{
            id: 1,
            description: 'Aprender React',
            done: false 

        },
        {
            id: 2,
            description: 'Aprender Mongo',
            done: false
        }], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn()
    })


    test('should display component correctly', () => { 
        render(<TodoApp />)
        //screen.debug()
        expect (screen.getByText('Aprender React')).toBeTruthy()
        expect(screen.getByText('Aprender Mongo')).toBeTruthy()
    })
 })