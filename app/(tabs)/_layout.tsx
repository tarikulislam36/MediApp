import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Iconss from '@/components/iconss';

const TabIcon = ({ name, focused, family }) => {
    return (
        <Iconss family={family} name={name} color={focused ? "#0fb1db" : "#ccc"} />
    )
}



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
                    tabBarIcon: ({ focused }) => (
                        <TabIcon family="FontAwesome" name="home" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="book"
                options={{
                    title: 'Book',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon family="FontAwesome" name="book" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon family="FontAwesome" name="user" focused={focused} />
                    ),
                }}
            />

        </Tabs>
    )
}

export default _layout