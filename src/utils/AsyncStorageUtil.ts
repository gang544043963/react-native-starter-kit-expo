import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorageKeys = {
    // Add your keys here
    MY_KEY: 'my-key'
};

export async function saveItem(key: string, item: any) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
        return true;
    } catch (error) {
        console.log(JSON.stringify(error));
        return false;
    }
}

export async function retrieveItem(key: string) {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        if (retrievedItem != null) {
            const item = JSON.parse(retrievedItem);
            return item;
        }
        return '';
    } catch (error) {
        console.error(JSON.stringify(error));
        return '';
    }
}

export async function removeItem(key: string) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(JSON.stringify(error));
    }
}
