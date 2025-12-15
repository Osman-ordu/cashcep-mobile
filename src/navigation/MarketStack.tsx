import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketsScreen from '@/screens/MarketsScreen';
import MarketDetailScreen from '@/screens/MarketDetailScreen';

export type MarketStackParamList = {
  Markets: undefined;
  MarketDetail: { id: string };
};

const Stack = createNativeStackNavigator<MarketStackParamList>();

export default function MarketStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Markets"
        component={MarketsScreen}
        options={{ title: 'Markets' }}
      />
      <Stack.Screen
        name="MarketDetail"
        component={MarketDetailScreen}
        options={{ title: 'Market Detail' }}
      />
    </Stack.Navigator>
  );
}


