import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Emergency from './Emergency';

const Nav = () => {
    return (
        <LinearGradient
            colors={['#f0c743', '#FFFFFF']} // peach to white #b5e8f5  , #fc6603 . #f0c743
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
                height: 138,
                paddingHorizontal: 16,
                paddingTop: 20,
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0,


            }}
            className="z-2"
        >
            {/* <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#333' }}>
                Home
            </Text> */}
            {/* Optional floating fruit image like apple
            <Image
                source={{ uri: 'https://img.icons8.com/emoji/48/green-apple.png' }}
                style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    top: 10,
                    left: 10,
                }}
            />
            <Image
                source={{ uri: 'https://img.icons8.com/emoji/48/red-apple.png' }}
                style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                }}
            />
            */}

            <Emergency></Emergency>
        </LinearGradient >
    );
};

export default Nav;
