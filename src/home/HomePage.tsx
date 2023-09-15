import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                title="Go to next page"
                onPress={() => {
                    navigation.navigate('HomePage2');
                }}
            />
            <StatusBar style="auto" />
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
