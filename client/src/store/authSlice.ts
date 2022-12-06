import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuth {
    isAuth: boolean,
    id: number | undefined,
    email: string | undefined
}

interface ILogin {
    id: number,
    email: string
}

const initialState: IAuth = {
    isAuth: false,
    id: undefined,
    email: undefined
}

const AuthState = createSlice({
    name: 'AuthState',
    initialState,
    reducers: {
        login(state, action: PayloadAction<ILogin>) {
            const { id, email } = action.payload
            state = {isAuth: true, id, email}
            localStorage.setItem('auth', JSON.stringify({isAuth: true, id, email}))
        },
        logout(state) {
            state = {isAuth: false, id: undefined, email: undefined}
            localStorage.removeItem('auth')
        }
    }
})

export const { login, logout } = AuthState.actions
export default AuthState.reducer