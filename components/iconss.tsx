import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

type IconProps = {
    family: 'FontAwesome' | 'Ionicons' | 'MaterialIcons' | 'Entypo' | 'Feather';
    name: string;
    color: string;
    size?: number;
};

export default function Iconss({
    family,
    name,
    color,
    size = 24,
}: IconProps) {
    switch (family) {
        case 'FontAwesome':
            return <FontAwesome name={name as any} size={size} color={color} />;
        case 'Ionicons':
            return <Ionicons name={name as any} size={size} color={color} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name as any} size={size} color={color} />;
        case 'Entypo':
            return <Entypo name={name as any} size={size} color={color} />;
        case 'Feather':
            return <Feather name={name as any} size={size} color={color} />;
        default:
            return null;
    }
}
