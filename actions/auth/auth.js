import { USER_LOGGED_IN } from "../../components/types";
import api from "../../components/api";


export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));