import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// ✅ Sample service data
const ServiceData = [
    { id: '1', name: 'Cardiology', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '2', name: 'Dentistry', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '3', name: 'Neurology', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '4', name: 'Orthopedics', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '5', name: 'Pediatrics', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '6', name: 'Dermatology', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
];

// ✅ Service Card Component
const ServiceCard = ({ item }) => (
    <TouchableOpacity className="bg-white rounded-xl items-center m-1 p-5 shadow-md w-[32%]">
        <Image
            source={{ uri: item.image }}
            className="w-12 h-12 mb-2"
            resizeMode="contain"
        />
        <Text className="text-xs font-semibold text-center">{item.name}</Text>
    </TouchableOpacity>
);

// ✅ Services Section
const ServSection = () => {
    return (
        <View className="mt-0 px-4 bg-white rounded-t-3xl">
            <Text className="text-lg font-bold mb-3">Services</Text>
            <FlatList
                data={ServiceData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ServiceCard item={item} />}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingBottom: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ServSection;
