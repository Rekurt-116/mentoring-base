import { createReducer, on } from "@ngrx/store";
import { UserAction } from "./user.action";
import { User } from "../../interfaces/user.interface";

const initialState: { users: User[] } = {
    users: []
}

export const userReduser = createReducer(
    initialState,
    on(UserAction.set, (state, payload) => ({
        ...state,
        users: payload.users,
    })),
    on(UserAction.edit, (state, payload) => ({
        ...state,
        users: state.users.map((user) => {
            if(user.id === payload.user.id) {
                return payload.user;
            } else {
                return user;
            }
        })
    })),
    on(UserAction.create, (state, payload) => ({
        ...state,
        users: [...state.users, payload.user]
    })),
    on(UserAction.delete, (state, payload) => ({
        ...state,
        users: state.users.filter((user) => user.id !== payload.id)
    }))
)