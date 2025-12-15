import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MarketDetailScreen from '@/screens/MarketDetailScreen';

export type RootStackParamList = {
  Tabs: undefined;
  MarketDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      {/* Örnek olarak, bazı durumlarda tab dışından detail açmak isteyebilirsin */}
      <Stack.Screen
        name="MarketDetail"
        component={MarketDetailScreen}
        options={{ headerShown: true, title: 'Market Detail' }}
      />
    </Stack.Navigator>
  );
}


