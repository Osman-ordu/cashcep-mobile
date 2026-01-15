import React from 'react';
import { View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/theme';
import { IProgressBarProps } from '@/types';
import { styles } from './styles';

export function ProgressBar({ currentStep, totalSteps }: IProgressBarProps) {
  const activeColor = useThemeColor(
    { light: Colors.light.tint, dark: Colors.dark.tint },
    'tint'
  );
  const inactiveColor = useThemeColor(
    { light: 'rgba(0,0,0,0.1)', dark: 'rgba(255,255,255,0.1)' },
    'card'
  );

  const progress = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: inactiveColor }]}>
        <View
          style={[
            styles.progress,
            {
              width: `${progress}%`,
              backgroundColor: activeColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

