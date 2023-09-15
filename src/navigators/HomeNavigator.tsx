import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomePage from '../home/HomePage';
import HomePage2 from '../home/HomePage2';
import { HomeStackParamList } from './Types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    return (
        <HomeStack.Navigator screenOptions={homeStackScreenOption}>
            <HomeStack.Screen component={HomePage} name="HomePage" />
            <HomeStack.Screen component={HomePage2} name="HomePage2" />
        </HomeStack.Navigator>
    );
}

const homeStackScreenOption = (): NativeStackNavigationOptions => ({
    gestureEnabled: true,
    // headerShown: false,
    headerBackVisible: true,
    contentStyle: {
        backgroundColor: 'transparent'
    }
});
