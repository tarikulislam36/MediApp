import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Nav from '@/components/Nav'
import BannerSlider from '@/components/BannerSlider';

const index = () => {
  return (
    <View className="flex-1 bg-bgclr">
      <Nav />

      <ScrollView className="flex-1">
        <View className="p-4">
          <BannerSlider />
        </View>
      </ScrollView>



    </View>
  )
}

export default index

