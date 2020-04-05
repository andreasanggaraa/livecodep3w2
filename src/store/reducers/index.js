import { combineReducers } from 'redux';
import { todosReducers } from './todosReducers'

export const rootReducers = combineReducers({
    todos: todosReducers
})
