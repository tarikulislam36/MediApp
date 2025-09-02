import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://eportal.60pluscare.in/api/v1";

const authFetch = async (endpoint, options = {}) => {
    const token = await AsyncStorage.getItem("token");
    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {}),
        },
    });
};

// Fetch all services
export const fetchServices = createAsyncThunk("service/fetchAll", async (_, { rejectWithValue }) => {
    try {
        const res = await authFetch("/services");
        const data = await res.json();
        if (!res.ok) return rejectWithValue(data.message);
        return data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

// Create a service
export const createService = createAsyncThunk("service/create", async (payload, { rejectWithValue }) => {
    try {
        const res = await authFetch("/serviceStore", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) return rejectWithValue(data.message);
        return data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

// Update a service
export const updateService = createAsyncThunk("service/update", async (payload, { rejectWithValue }) => {
    try {
        const res = await authFetch("/serviceUpdate", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) return rejectWithValue(data.message);
        return data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

// Delete a service
export const deleteService = createAsyncThunk("service/delete", async (id, { rejectWithValue }) => {
    try {
        const res = await authFetch("/serviceDelete", {
            method: "POST",
            body: JSON.stringify({ id }),
        });
        const data = await res.json();
        if (!res.ok) return rejectWithValue(data.message);
        return id; // return deleted ID for frontend cleanup
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

const serviceSlice = createSlice({
    name: "service",
    initialState: { list: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.data;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(createService.fulfilled, (state, action) => {
                state.list.push(action.payload.data);
            })
            .addCase(updateService.fulfilled, (state, action) => {
                const idx = state.list.findIndex(s => s.id === action.payload.data.id);
                if (idx !== -1) state.list[idx] = action.payload.data;
            })
            .addCase(deleteService.fulfilled, (state, action) => {
                state.list = state.list.filter(s => s.id !== action.payload);
            });
    },
});

export default serviceSlice.reducer;
