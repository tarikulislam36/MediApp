import React, { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, logoutUser } from "../store/authSlice"

const profile = () => {
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const { token, loading, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(loginUser({ mobile, password }))
    }


    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            {token ? (
                <>
                    <Text>Welcome! You are logged in 🚀</Text>
                    <Button title="Logout" onPress={() => dispatch(logoutUser())} />
                    {/* Display token if available */}
                    <Text>Your token: {token}</Text>
                </>
            ) : (
                <>
                    <Text>Login</Text>
                    <Text>Login</Text>
                    <TextInput placeholder="Mobile" value={mobile} onChangeText={setMobile} />
                    <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

                    {loading ? <ActivityIndicator /> : <Button title="Login" onPress={handleLogin} />}
                    {error && <Text style={{ color: "red" }}>{error}</Text>}

                    <Button title="Go to Register" onPress={() => navigation.navigate("Register")} />
                </>
            )}
        </View>
    )
}

export default profile