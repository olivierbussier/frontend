import { createStore } from "redux"

const initialState = [
    {
        connected: false,
        user: null
    }
]

export const CONNECT_USER = 'connect-user'
export const DISCONNECT_USER = 'disconnect-user'

const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONNECT_USER:
            return {...state, user: 'olivier', connected: true}
        case DISCONNECT_USER:
            return {...state, user: null, connected: false}
        default:
            return state
    }
}


export const homeStore = createStore(
    homeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default homeStore