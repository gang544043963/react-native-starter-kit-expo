import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../settings/SettingsScreen';
import { AntDesign } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TabParamList } from './Types';

const Tab = createBottomTabNavigator<TabParamList>();

const homeTabIcon = ({ color }) => <AntDesign name="home" size={32} color={color} />;
const settingsTabIcon = ({ color }) => <AntDesign name="setting" size={32} color={color} />;

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
            <Tab.Screen name="Home" component={HomeNavigator} options={{ tabBarIcon: homeTabIcon }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: settingsTabIcon }} />
        </Tab.Navigator>
    );
}
