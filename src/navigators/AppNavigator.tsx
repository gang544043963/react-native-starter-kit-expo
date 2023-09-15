import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './Types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={rootStackScreenOption}>
                <RootStack.Screen component={TabNavigator} name="TabNavigator" />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const rootStackScreenOption = (): NativeStackNavigationOptions => ({
    gestureEnabled: true,
    headerShown: false,
    contentStyle: {
        backgroundColor: 'transparent'
    }
});
