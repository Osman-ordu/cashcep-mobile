import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const tokenService = {
  getToken: async () => AsyncStorage.getItem(TOKEN_KEY),
  setToken: async (token: string) => AsyncStorage.setItem(TOKEN_KEY, token),
  getRefreshToken: async () => AsyncStorage.getItem(REFRESH_TOKEN_KEY),
  setRefreshToken: async (token: string) =>
    AsyncStorage.setItem(REFRESH_TOKEN_KEY, token),
  clear: async () => AsyncStorage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY]),
};
