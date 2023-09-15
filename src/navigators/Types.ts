import type { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    TabNavigator: NavigatorScreenParams<TabParamList>;
} & ScreenProps;

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type TabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    Settings: undefined;
};

// Home Stack screens
export type HomeStackParamList = {
    HomePage: undefined;
    HomePage2: undefined;
};

// Settings Stack screens
export type SettingsStackParamList = {};

// All screens
export type ScreenProps = HomeStackParamList & SettingsStackParamList;

// Specifying a global type for our root navigator would avoid manual annotations in many places.
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
