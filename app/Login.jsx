import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-white px-6">
            <Text className="text-3xl font-bold mb-8 text-blue-600">Login</Text>
            <TextInput
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity className="w-full bg-blue-600 py-3 rounded-lg" onPress={() => { /* handle login */ }}>
                <Text className="text-white text-center font-semibold text-base">Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;