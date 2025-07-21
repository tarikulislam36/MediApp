import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ServiceCard from '@/components/ServiceCard'; // Make sure this component exists and supports props

const services = [
    { id: 1, name: 'Plumbing', icon: 'wrench' },
    { id: 2, name: 'Electrician', icon: 'bolt' },
    { id: 3, name: 'Cleaning', icon: 'broom' },
    { id: 4, name: 'Repair', icon: 'tools' },
    { id: 5, name: 'Delivery', icon: 'truck' },
    { id: 6, name: 'Painting', icon: 'paint-brush' },
];

export default function Book() {
    const renderItem = ({ item }) => (
        <ServiceCard
            name={item.name}
            icon={item.icon}
            onPress={() => console.log(item.name)}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Service Section</Text>

            <View style={styles.cardContainer}>
                <FlatList
                    data={services}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#E5E7EB', // Tailwind's bg-gray-200
        paddingTop: 48,
    },
    heading: {
        color: '#000',
        fontSize: 14,
        marginBottom: 16,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        width: '90%',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});
