import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import './global.css'

const _layout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  )
}

export default _layout