import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        mode: 'light',
        component: 'feed'
    },
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        setMode: (state, action) => {
            const { mode } = action.payload
            state.mode = mode
        },
        setComponent: (state, action) => {
            const { component } = action.payload
            state.component = component
        },
        logOut: (state, action) => {
            state.token = null
            state.mode = 'light'
            state.component = 'feed'
        },
    }
})

export const { setCredentials, setMode, setComponent, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectMode = (state) => state.auth.mode
export const selectComponent = (state) => state.auth.component