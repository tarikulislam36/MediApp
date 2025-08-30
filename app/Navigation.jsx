import React, { useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useDispatch, useSelector } from "react-redux"
import { loadToken } from "./store/authSlice"

import LoginScreen from "../screen/LoginScreen"

const Stack = createNativeStackNavigator()

export default function Navigation() {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToken()) // check token on app start
    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ? (
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    )
}
