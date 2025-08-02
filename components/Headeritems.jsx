import { View, Text } from 'react-native'
import React from 'react'
import Iconss from '@/components/iconss';

const Headeritems = () => {
    return (
        <View className='flex-row  justify-between px-4 py-2 bg-white shadow-md h-36 rounded-lg'>
            <Iconss family="FontAwesome" name="home" size={27} color="#0fb1db" className="mr-2 bg-black h-48" />

        </View>
    )
}

export default Headeritems