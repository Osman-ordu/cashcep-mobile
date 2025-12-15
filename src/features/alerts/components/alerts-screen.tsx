import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ui/themed-view';
import { ThemedText } from '@/components/ui/themed-text';
import { Navbar } from '@/components/layout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AlertsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">Alerts</ThemedText>
        <ThemedText style={styles.description}>
          Uyarılar sayfası içeriği buraya gelecek.
        </ThemedText>
      </ThemedView>
      <Navbar />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
});

