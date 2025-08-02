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


                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                    height: 130,
                    borderRadius: 20,
                    paddingBottom: 10,
                    paddingTop: 10,

                    paddingHorizontal: 20,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    borderTopColor: 'transparent',
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    shadowOffset: { width: 15, height: 15 },
                    // shadowColor: '#f5faf7',
                    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fafffc', // Adjusted background color
                    // borderTopWidth: 2,
                    // borderTopColor: '#0fb1db', // Border color for the top

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