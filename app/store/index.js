import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import member from "./memberSlice";
import service from "./serviceSlice";




const store = configureStore({
    reducer: {
        auth: authReducer,
        member: member,
        service: service,
    },
})

export default store
