import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuth {
    isAuth: boolean,
    email: string | undefined
}

const initialState: IAuth = {
    isAuth: false,
    email: undefined
}

const AuthState = createSlice({
    name: 'AuthState',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isAuth = true
            state.email = action.payload
            localStorage.setItem('auth', JSON.stringify({isAuth: true, email: action.payload}))
        },
        logout(state) {
            state.isAuth = false
            state.email = undefined
            localStorage.removeItem('auth')
        }
    }
})

export const { login, logout } = AuthState.actions
export default AuthState.reducer