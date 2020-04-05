import actionTypes from '../actions/actionTypes.js'

const initialState = {
    todos: [],
    isLoading: false
}

export const todosReducers = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case actionTypes.FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            }

        case actionTypes.ADD_USER:
            return {
                ...state,
                todos: [...state.todos, {
                    id: state.todos.length + 1,
                    name: action.payload
                }]
            }

        default:
            return state;
    }
}