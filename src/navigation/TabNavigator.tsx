import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/screens/HomeScreen';
import MarketsStack from './MarketStack';
import PortfolioScreen from '@/screens/PortfolioScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { useTheme } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  MarketsStack: undefined;
  Portfolio: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.border,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0.5,
          borderTopColor: theme.colors.border,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'MarketsStack') {
            iconName = 'trending-up-outline';
          } else if (route.name === 'Portfolio') {
            iconName = 'pie-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen
        name="MarketsStack"
        component={MarketsStack}
        options={{ title: 'Markets' }}
      />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} options={{ title: 'Portfolio' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}


