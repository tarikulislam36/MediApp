import { View, Text } from 'react-native'
import React from 'react'
import Iconss from '@/components/iconss';

const Emergency = () => {
    return (
        <View className="flex-row justify-end left-10  rounded-lg m-4 top-[-20] p-4">
            <Iconss family="MaterialIcons" name="health-and-safety" size={54} color="#b80226" />
            <Text className="text-lg font-bold  text-gray-700 ml-0.5 top-4 mr-2">Emergency</Text>
        </View>
    )
}

export default Emergency