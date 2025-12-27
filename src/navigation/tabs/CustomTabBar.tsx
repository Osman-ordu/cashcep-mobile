import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ui';
import { useTheme as useAppTheme } from '@/contexts/ThemeContext';
import { TAB_CONFIGS, getTabColors } from './config';
import { styles } from './styles';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const theme = useTheme();
  const { colorScheme } = useAppTheme();
  const colors = getTabColors(colorScheme);

  if (!navigation || !state || !descriptors) {
    return null;
  }

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          backgroundColor: theme.colors.background,
          borderTopColor: colors.borderColor,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!navigation) return;
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            try {
              navigation.navigate(route.name as never);
            } catch (error) {
              // Navigation not ready, ignore
            }
          }
        };

        const onLongPress = () => {
          if (!navigation) return;
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabConfig = TAB_CONFIGS[route.name] || TAB_CONFIGS['Transactions'];
        const iconName = isFocused ? tabConfig.icon.active : tabConfig.icon.inactive;
        const iconColor = isFocused ? colors.activeColor : colors.inactiveTextColor;
        const textColor = isFocused ? colors.activeColor : colors.inactiveTextColor;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {isFocused && (
              <View
                style={[
                  styles.activeBorder,
                  {
                    backgroundColor: colors.activeColor,
                  },
                ]}
              />
            )}
            <Ionicons name={iconName} size={24} color={iconColor} />
            <ThemedText
              style={[
                styles.tabLabel,
                {
                  color: textColor,
                  fontWeight: isFocused ? '600' : '500',
                },
              ]}
            >
              {label}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

