import {type ListOfTodos}from '../types'
export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type ListOfTodos = Todo[]