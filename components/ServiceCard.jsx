import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ServiceCard({ icon = "cog", name = "Service", onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignItems: 'center',
                backgroundColor: '#e5e7eb', // Tailwind's bg-gray-200
                borderRadius: 8,
                padding: 16,
                width: 96, // 24 * 4 = 96
                margin: 8,
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
