import React from 'react';
import { View } from 'react-native';
import { EmailInput, PasswordInput } from '@/components/ui';
import { IRegisterStepProps } from '@/types';
import { styles } from './styles';

export function Step3({ control, errors, dynamicStyles }: IRegisterStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <EmailInput
          control={control}
          errors={errors}
          dynamicStyles={dynamicStyles}
        />
      </View>
      <View style={styles.inputWrapper}>
        <PasswordInput
          control={control}
          errors={errors}
          dynamicStyles={dynamicStyles}
          label="Şifre"
          name="password"
        />
      </View>
    </View>
  );
}

