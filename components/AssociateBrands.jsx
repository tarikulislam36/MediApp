import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

// ✅ Sample Associate Brand Data
const BrandData = [
    { id: '1', name: 'Apollo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '2', name: 'Fortis', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '3', name: 'AIIMS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '4', name: 'Manipal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '5', name: 'Narayana', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
    { id: '6', name: 'Max', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DefaultImage.png/573px-DefaultImage.png' },
];

// ✅ Brand Card (for horizontal view)
const BrandCard = ({ item }) => (
    <TouchableOpacity className="bg-white rounded items-center mr-4">
        <Image
            source={{ uri: item.image }}
            className="w-20 h-10 rounded-md"
            resizeMode="contain"
        />
        <Text className="text-xs mt-1">{item.name}</Text>
    </TouchableOpacity>
);

// ✅ Associate Brands (Horizontal Scroll)
const AssociateBrands = () => {
    return (
        <View className="mt-4 px-4">
            <Text className="text-lg font-bold mb-3">Our Associate Brands</Text>
            <FlatList
                data={BrandData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <BrandCard item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default AssociateBrands;
