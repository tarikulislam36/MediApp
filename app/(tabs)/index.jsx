import React from 'react';
import { View, FlatList } from 'react-native';
import Nav from '@/components/Nav';
import BannerSlider from '@/components/BannerSlider';
import ServiceSection from '@/components/ServiceSection';
import Emergency from '../../components/Emergency';
import Headeritems from '../../components/Headeritems';
import ServSection from '../../components/ServSection';
import AssociateBrands from '../../components/AssociateBrands';

const index = () => {
  const dummyData = [{ key: 'dummy' }]; // Needed to render FlatList even if empty

  return (
    <View className="flex-1 bg-white">
      <Nav />
      <FlatList
        data={dummyData}
        renderItem={null}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <View className="p-0 bg-transparent mt-20 rounded-t-3xl  h-[100vh]  overflow-hidden">

            {/* <Headeritems /> */}
            <BannerSlider />
            {/* <ServiceSection /> */}
            <ServSection />
            <AssociateBrands></AssociateBrands>

          </View>
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

export default index;
