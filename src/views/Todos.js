import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allActions } from '../store/actions/index'
import { NotificationManager } from 'react-notifications'

export default function Todos() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(allActions.addUser(name))
        setName('')
        NotificationManager.success(`Add ${name} to list`, "Success", 2500)
    }

    useEffect(() => {
        dispatch(allActions.fetchTodos())    
    }, [dispatch])

    const todos = useSelector(state => state.todos.todos)
    const isLoading = useSelector(state => state.todos.isLoading)

    if(isLoading) {
        return (
            <div className="todos">
                <h1>Ini lagi loading</h1>
            </div>
        )
    }

    return (
        <div className="todos">
            <h1>Ini todos</h1>
            <h2>Ini form nambah User</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => handleChange(event)} value={name} type="text" placeholder="input your name here" />
                <button type="submit"> Submit </button>
            </form>

            {todos && todos.map(todo => (
                <h1>Name: {todo.name}</h1>
            ))}
        </div>
    )
}
