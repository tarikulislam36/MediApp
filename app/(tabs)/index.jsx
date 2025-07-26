import React from 'react';
import { View, FlatList } from 'react-native';
import Nav from '@/components/Nav';
import BannerSlider from '@/components/BannerSlider';
import ServiceSection from '@/components/ServiceSection';
import Emergency from '../../components/Emergency';
import Headeritems from '../../components/Headeritems';

const index = () => {
  const dummyData = [{ key: 'dummy' }]; // Needed to render FlatList even if empty

  return (
    <View className="flex-1 bg-bgclr">
      <Nav />
      <FlatList
        data={dummyData}
        renderItem={null}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <View className="p-0 bg-white mt-28 rounded-t-3xl shadow-lg h-[100vh]">

            <Headeritems />
            <BannerSlider />
            {/* <ServiceSection />
            <ServiceSection /> */}
          </View>
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

export default index;
