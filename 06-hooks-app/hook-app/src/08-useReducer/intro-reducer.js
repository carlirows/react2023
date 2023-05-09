export const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];
//reducer no es mas que una funcion pura que devuelve un estado
const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos =  todoReducer(); 
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );
console.log({state: todos});
