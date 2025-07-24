import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Iconss from '@/components/iconss';

const TabIcon = ({ name, focused, family }) => {
    return (
        <Iconss family={family} name={name} size={27} color={focused ? "#0fb1db" : "#ccc"} />
    )
}



const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    position: 'absolute',
                    bottom: -15,
                    left: 0,
                    right: 0,

                    backgroundColor: '#f0d16c',  //f5d469
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                },
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