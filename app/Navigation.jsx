import React, { useEffect } from "react"
import { Stack, useRouter } from 'expo-router'
import { useDispatch, useSelector } from "react-redux"
import { loadToken } from "./store/authSlice"

export default function Navigation() {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(loadToken()) // check token on app start
    }, [])

    useEffect(() => {
        if (!token) {
            // router.replace("/login") // Redirect to login when logged out
        }
    }, [token])

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
    )
}