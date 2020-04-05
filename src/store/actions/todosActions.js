import axios from 'axios'
import actionTypes from './actionTypes.js'

export const fetchTodos = () => dispatch => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(({ data }) => {
            dispatch({
                type: actionTypes.FETCH_TODOS,
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch({ type: actionTypes.SET_LOADING, payload: false })
        })
}

export const addUser = (data) => dispatch => {
    dispatch({ type: actionTypes.ADD_USER, payload: data })
}