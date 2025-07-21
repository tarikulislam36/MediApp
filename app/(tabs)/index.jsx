import { View, Text, ScrollView, Button, Alert } from 'react-native'
import React from 'react'
import Nav from '@/components/Nav'
import BannerSlider from '@/components/BannerSlider';

const index = () => {
  return (
    <View className="flex-1 bg-bgclr">
      <Nav />

      <ScrollView className="flex-1">

        <View className="p-0 bg-white top-28 rounded-t-3xl shadow-lg">
          <BannerSlider />
        </View>

      </ScrollView>



    </View>
  )
}

export default index

