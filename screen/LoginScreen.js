import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/store/authSlice";

export default function Login() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogin = () => {
        if (username.trim() !== "") {
            dispatch(login({ name: username }));
        }
    };

    return (
        <View style={{ padding: 20 }}>
            {auth.isLoggedIn ? (
                <Text>Welcome {auth.user?.name}</Text>
            ) : (
                <>
                    <TextInput
                        placeholder="Enter your name"
                        value={username}
                        onChangeText={setUsername}
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            marginBottom: 10,
                        }}
                    />
                    <Button title="Login" onPress={handleLogin} />
                </>
            )}
        </View>
    );
}
