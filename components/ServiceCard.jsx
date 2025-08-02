import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ServiceCard({ icon = "cog", name = "Service", onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                backgroundColor: '#fff', // Tailwind's bg-gray-200
                borderRadius: 8,
                padding: 16,
                height: 110,
                width: 110, // 24 * 4 = 96
                margin: 5,
                marginBottom: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5, // For Android shadow
            }}
        >
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 8,
                    borderRadius: 9999, // fully rounded
                    marginBottom: 8,
                }}
            >
                <FontAwesome name={icon} size={24} color="#000" />
            </View>
            <Text style={{ fontSize: 12, textAlign: 'center' }}>{name}</Text>
        </TouchableOpacity>
    );
}
