import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Iconss from '@/components/iconss';



const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Iconss family="FontAwesome" name="home" color={"#0fb1db"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="book"
                options={{
                    title: 'Book',
                    tabBarIcon: ({ color }) => (
                        <Iconss family="FontAwesome" name="book" color={"#0fb1db"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Iconss family="FontAwesome" name="user" color={"#0fb1db"} />
                    ),
                }}
            />

        </Tabs>
    )
}

export default _layout