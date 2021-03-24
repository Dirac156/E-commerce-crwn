import { userActionsType } from "./user.types";

export const setCurrentUser = user => ({
    type:  userActionsType.SET_CURRENT_USER,
    payload: user
})
