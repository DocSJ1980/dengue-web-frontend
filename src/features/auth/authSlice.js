import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        mode: 'light',
        component: 'feed',
        persist: false,
        myUC: {}
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
        setPersist: (state, action) => {
            const { persist } = action.payload
            state.persist = persist
        },
        setComponent: (state, action) => {
            const { component } = action.payload
            state.component = component
        },
        setMyUC: (state, action) => {
            const { myUC } = action.payload
            state.myUC = myUC
        },
        logOut: (state, action) => {
            state.token = null
            state.mode = 'light'
            state.persist = false
            state.component = 'feed'
            state.myUC = {}
        },
    }
})

export const { setCredentials, setMode, setPersist, setComponent, logOut, setMyUC } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectMode = (state) => state.auth.mode
export const selectPersist = (state) => state.auth.persist
export const selectComponent = (state) => state.auth.component
export const selectMyUC = (state) => state.auth.myUC