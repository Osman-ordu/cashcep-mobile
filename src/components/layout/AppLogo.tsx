import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ui/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

interface AppLogoProps {
  logoHeight?: number;
}

export function AppLogo({ logoHeight = 60 }: AppLogoProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  const totalHeaderHeight = logoHeight + insets.top;

  const logoSource = useMemo(
    () =>
      colorScheme === 'dark'
        ? require('@/assets/images/text-logo-dark-mini.png')
        : require('@/assets/images/text-logo-light-mini.png'),
    [colorScheme]
  );

  return (
    <ThemedView
      style={[
        styles.logoContainer,
        {
          backgroundColor,
          paddingTop: insets.top,
          height: totalHeaderHeight,
        },
      ]}
    >
      <Image
        source={logoSource}
        style={styles.logoImage}
        contentFit="contain"
        transition={200}
        accessibilityLabel="FinTrack Crypto Logo"
        accessibilityRole="image"
      />
    </ThemedView>
  );
}

// Export total header height calculation helper
export function useAppLogoHeight(logoHeight: number = 60) {
  const insets = useSafeAreaInsets();
  return logoHeight + insets.top;
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    zIndex: 10,
    overflow: 'hidden',
  },
  logoImage: {
    width: 200,
    height: 40,
  },
});

