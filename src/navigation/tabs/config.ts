import { Ionicons } from '@expo/vector-icons';

export type TabConfig = {
  name: string;
  icon: {
    active: keyof typeof Ionicons.glyphMap;
    inactive: keyof typeof Ionicons.glyphMap;
  };
};

export const TAB_CONFIGS: Record<string, TabConfig> = {
  Market: {
    name: 'Market',
    icon: {
      active: 'trending-up',
      inactive: 'trending-up-outline',
    },
  },
  Transactions: {
    name: 'Transactions',
    icon: {
      active: 'swap-horizontal',
      inactive: 'swap-horizontal-outline',
    },
  },
  Portfolio: {
    name: 'Portfolio',
    icon: {
      active: 'pie-chart',
      inactive: 'pie-chart-outline',
    },
  },
  Profile: {
    name: 'Profile',
    icon: {
      active: 'person',
      inactive: 'person-outline',
    },
  },
};

export const getTabColors = (colorScheme: 'light' | 'dark') => {
  return {
    borderColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)',
    inactiveTextColor: colorScheme === 'dark' ? '#9BA1A6' : '#687076',
    activeColor: colorScheme === 'dark' ? '#fff' : '#333',
  };
};

