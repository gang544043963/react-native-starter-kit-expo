import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorageKeys, removeItem, retrieveItem, saveItem } from '../AsyncStorageUtil';

describe('localStorageUtils', () => {
    it('saveItem', () => {
        saveItem(localStorageKeys.MY_KEY, {
            flag: 1
        });

        expect(AsyncStorage.setItem).toBeCalled();
        expect(AsyncStorage.setItem).toBeCalledWith(
            localStorageKeys.MY_KEY,
            JSON.stringify({
                flag: 1
            })
        );
    });

    it('retrieveItem', () => {
        retrieveItem(localStorageKeys.MY_KEY);

        expect(AsyncStorage.getItem).toBeCalled();
        expect(AsyncStorage.getItem).toBeCalledWith(localStorageKeys.MY_KEY);
    });

    it('removeItem', () => {
        removeItem(localStorageKeys.MY_KEY);

        expect(AsyncStorage.removeItem).toBeCalled();
        expect(AsyncStorage.removeItem).toBeCalledWith(localStorageKeys.MY_KEY);
    });
});
