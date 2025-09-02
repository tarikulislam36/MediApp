import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"

const API_URL = "https://eportal.60pluscare.in/api/v1"

// Helper to add token automatically
const authFetch = async (endpoint, options = {}) => {
    const token = await AsyncStorage.getItem("token")
    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {}),
        },
    })
}

// Thunks
export const fetchMembers = createAsyncThunk("member/fetchAll", async (_, { rejectWithValue }) => {
    try {
        const res = await authFetch("/members")
        const data = await res.json()
        if (!res.ok) return rejectWithValue(data.message)
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export const createMember = createAsyncThunk("member/create", async (payload, { rejectWithValue }) => {
    try {
        const res = await authFetch("/memberStore", {
            method: "POST",
            body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (!res.ok) return rejectWithValue(data.message)
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export const updateMember = createAsyncThunk("member/update", async (payload, { rejectWithValue }) => {
    try {
        const res = await authFetch("/memberUpdate", {
            method: "POST",
            body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (!res.ok) return rejectWithValue(data.message)
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

export const deleteMember = createAsyncThunk("member/delete", async (id, { rejectWithValue }) => {
    try {
        const res = await authFetch("/memberDelete", {
            method: "POST",
            body: JSON.stringify({ id }),
        })
        const data = await res.json()
        if (!res.ok) return rejectWithValue(data.message)
        return id // return deleted id
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const memberSlice = createSlice({
    name: "member",
    initialState: { list: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMembers.pending, (state) => { state.loading = true })
            .addCase(fetchMembers.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload.data
            })
            .addCase(fetchMembers.rejected, (state, action) => { state.loading = false; state.error = action.payload })

            .addCase(createMember.fulfilled, (state, action) => { state.list.push(action.payload.data) })
            .addCase(updateMember.fulfilled, (state, action) => {
                const idx = state.list.findIndex(m => m.id === action.payload.data.id)
                if (idx !== -1) state.list[idx] = action.payload.data
            })
            .addCase(deleteMember.fulfilled, (state, action) => {
                state.list = state.list.filter(m => m.id !== action.payload)
            })
    }
})

export default memberSlice.reducer
