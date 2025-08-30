import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API_URL = "https://eportal.60pluscare.in/api/v1"

// 🔹 Login thunk
export const loginUser = createAsyncThunk("auth/loginUser", async ({ mobile, password }, { rejectWithValue }) => {
    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mobile, password }),
        })
        const data = await res.json()

        if (!res.ok) return rejectWithValue(data.message || "Login failed")

        // store token in AsyncStorage
        await AsyncStorage.setItem("token", data.token)

        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

// 🔹 Register thunk
export const registerUser = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })
        const data = await res.json()

        if (!res.ok) return rejectWithValue(data.message || "Register failed")
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

// 🔹 Load token (for auto-login)
export const loadToken = createAsyncThunk("auth/loadToken", async () => {
    const token = await AsyncStorage.getItem("token")
    return token
})

// 🔹 Logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    await AsyncStorage.removeItem("token")
    return null
})

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.token
                state.user = action.payload.user
            })
            .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload })

            // register
            .addCase(registerUser.pending, (state) => { state.loading = true })
            .addCase(registerUser.fulfilled, (state) => { state.loading = false })
            .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload })

            // load token
            .addCase(loadToken.fulfilled, (state, action) => {
                state.token = action.payload
            })

            // logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.token = null
            })
    }
})

export default authSlice.reducer
