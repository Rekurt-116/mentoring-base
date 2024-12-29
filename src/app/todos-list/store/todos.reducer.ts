import { Todo } from "../../interfaces/todo.interface";
import { TodoAction } from "./todo.action";
import { createReducer, on } from "@ngrx/store";

const initialState: { todos: Todo[] } = {
    todos: []
}

export const todoReducer = createReducer(
    initialState,
    on(TodoAction.set, (state, payload) => ({
        ...state,
        todos: payload.todos,
    })),
    on(TodoAction.create, (state, payload) => ({
        ...state,
        todos: [...state.todos, payload.todo]
    })),
    on(TodoAction.delete, (state, payload) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id)
    }))
)