import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PortfolioScreen } from '@/feautures/portfolio';
import { ProfileScreen } from '@/feautures/profile';
import { TransactionsScreen } from '@/feautures/transactions';
import { TabParamList } from '@/types';
import MarketStack from './stacks/MarketStack';
import { CustomTabBar } from './tabs/CustomTabBar';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen 
        name="Market" 
        component={MarketStack}
        options={{ title: 'Piyasalar' }}
      />
      <Tab.Screen 
        name="Transactions" 
        component={TransactionsScreen}
        options={{ title: 'İşlemler' }}
      />
      <Tab.Screen 
        name="Portfolio" 
        component={PortfolioScreen}
        options={{ title: 'Portföy' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
}
