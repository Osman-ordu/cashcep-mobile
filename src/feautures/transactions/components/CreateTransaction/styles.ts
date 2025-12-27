import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { SemanticColors, OverlayColors } from '@/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 20,
    fontWeight: '400',
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: SemanticColors.warningBackground,
    marginBottom: 16,
  },
  connectionStatusText: {
    fontSize: 12,
    color: SemanticColors.warning,
    fontWeight: '500',
  },
  formContainer: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    opacity: 0.8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: '600',
    minHeight: 52,
  },
  errorText: {
    fontSize: 12,
    color: SemanticColors.error,
    marginTop: 4,
    fontWeight: '500',
  },
  currencyPairContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currencySelector: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 52,
  },
  currencySelectorText: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.5,
    marginHorizontal: 4,
  },
  priceContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: OverlayColors.overlayVeryLight,
    gap: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  submitButton: {
    marginTop: 8,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: OverlayColors.overlay,
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  modalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  modalBody: {
    maxHeight: 400,
  },
  currencyOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  currencyOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currencyOptionCode: {
    fontSize: 16,
    fontWeight: '700',
    minWidth: 60,
  },
  currencyOptionName: {
    fontSize: 14,
    opacity: 0.7,
  },
  currencyOptionPrice: {
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.8,
  },
});

// Dinamik stiller için helper fonksiyonlar
export const getDynamicStyles = (textColor: string) => ({
  currencySelector: (hasError: boolean): ViewStyle => ({
    borderColor: hasError ? SemanticColors.error : textColor + '30',
    backgroundColor: textColor + '10',
  }),
  currencySelectorText: (hasValue: boolean): TextStyle => ({
    color: hasValue ? textColor : textColor + '60',
  }),
  currencySelectorIcon: (): string => textColor + '80',
  quoteAssetSelector: (): ViewStyle => ({
    borderColor: textColor + '30',
    backgroundColor: textColor + '10',
    opacity: 0.6,
  }),
  quoteAssetText: (): TextStyle => ({
    color: textColor,
  }),
  input: (hasError: boolean): ViewStyle & TextStyle => ({
    color: textColor,
    borderColor: hasError ? SemanticColors.error : textColor + '30',
    backgroundColor: textColor + '10',
  }),
  inputPlaceholder: (): string => textColor + '60',
  modalCloseIcon: (): string => textColor,
  currencyOption: (isSelected: boolean): ViewStyle => ({
    backgroundColor: isSelected ? textColor + '20' : 'transparent',
  }),
  warningIcon: (): string => SemanticColors.warning,
});

