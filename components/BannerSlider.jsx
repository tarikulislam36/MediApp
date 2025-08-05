import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    image: 'https://plus.unsplash.com/premium_photo-1672759455907-bdaef741cd88?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    image: 'https://plus.unsplash.com/premium_photo-1675807264002-74250202f195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BannerSlider = () => {
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Auto Slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (currentPage + 1) % banners.length;
      pagerRef.current?.setPage(nextPage);
      setCurrentPage(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPage]);

  const goToNext = () => {
    const next = (currentPage + 1) % banners.length;
    pagerRef.current?.setPage(next);
    setCurrentPage(next);
  };

  const goToPrev = () => {
    const prev = (currentPage - 1 + banners.length) % banners.length;
    pagerRef.current?.setPage(prev);
    setCurrentPage(prev);
  };

  return (
    <View className="relative mt-12 items-center top-0 p-5  ">
      <PagerView
        style={{ width: width * 1, height: 160 }}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {banners.map((item) => (
          <View key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: width * 1,
                height: 160,
                borderRadius: 12,
              }}
              resizeMode="cover"
            />
          </View>
        ))}
      </PagerView>

      {/* Navigation Arrows */}
      <TouchableOpacity
        onPress={goToPrev}
        className="absolute left-2 top-[35%] bg-white/70 rounded-full p-2"
      >
        <Text className="text-xl">◀</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToNext}
        className="absolute right-2 top-[35%] bg-white/70 rounded-full p-2"
      >
        <Text className="text-xl">▶</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BannerSlider;
