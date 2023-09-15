import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function HomePage2() {
    return (
        <View style={styles.container}>
            <Text>HomePage2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
