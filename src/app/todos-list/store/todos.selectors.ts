import { Todo } from "../../interfaces/todo.interface";
import { createSelector } from "@ngrx/store";

interface TodoState {
    todos: Todo[];
}

interface AppState {
    todos: TodoState;
}

export const selectTodoFeature = (state: AppState) => state.todos;

export const selectTodo = createSelector(
     selectTodoFeature,
     (state: TodoState) => state.todos
)