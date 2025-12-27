import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { CustomGrid } from '@/components/ui/custom-grid';
import { quickTransactionColumns } from '@/db/columns';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useDispatch } from 'react-redux';
import { getQuickTransaction } from '@/store/quickTransactions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { styles } from './styles';

interface QuickTransactionsProps {
  onQuickAdd: (currency: string, amount: number) => void;
}

export function QuickTransactions({ onQuickAdd }: QuickTransactionsProps) {
  const dispatch = useDispatch();
  const quickTransactions = useSelector((state: RootState) => state.quickTransaction?.data?.data);
  const textColor = useThemeColor({}, 'text');

  useEffect(() => {
   (async () => {
    await dispatch(getQuickTransaction() as any);
   })();
  }, []);

  return (
    <ThemedView card style={styles.card}>
      <ThemedText style={styles.title}>Hızlı İşlemler</ThemedText>
      <ThemedText style={styles.subtitle}>Sık kullanılan miktarlarla hızlıca ekleyin</ThemedText>

      <CustomGrid
        gridKey="quick-transactions"
        data={quickTransactions || []}
        columns={quickTransactionColumns}
        renderRowActions={(row) => (
          <Pressable
            style={[styles.addButton, { backgroundColor: textColor + '20' }]}
            onPress={() => onQuickAdd(row.currency, row.amount as number)}
          >
            <Ionicons name="add" size={18} color={textColor} />
          </Pressable>
        )}
      />
    </ThemedView>
  );
}


