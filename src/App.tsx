import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import RootNavigator from './navigation/RootNavigator';
import { Colors } from '@/constants/theme';

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    primary: Colors.light.tint,
    text: Colors.light.text,
    card: '#ffffff',
    border: 'rgba(0,0,0,0.08)',
  },
};

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.dark.background,
    primary: Colors.dark.tint,
    text: Colors.dark.text,
    card: '#111111',
    border: 'rgba(255,255,255,0.1)',
  },
};

export default function AppRoot() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}



