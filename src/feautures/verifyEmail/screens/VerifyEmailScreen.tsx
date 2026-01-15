import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView,View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { sendEmailVerification } from 'firebase/auth';
import { ScreenLayout } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';
import { auth } from '@/lib/firebase';
import { RootStackParamList } from '@/navigation/types';
import { getAuth } from '@/store/auth';
import { showErrorToast,showSuccessToast } from '@/utils/toast';
import { styles } from './VerifyEmailScreen.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function VerifyEmailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const resend = async () => {
    if (!auth.currentUser) return;

    try {
      setResending(true);
      await sendEmailVerification(auth.currentUser);
      showSuccessToast('Doğrulama maili tekrar gönderildi.');
    } catch (error) {
      showErrorToast('Mail gönderilirken bir hata oluştu.');
      void error;
    } finally {
      setResending(false);
    }
  };

  const checkVerification = async () => {
    if (!auth.currentUser) {
      showErrorToast('Kullanıcı bulunamadı. Lütfen tekrar giriş yapın.');
      navigation.navigate('Login');
      return;
    }

    try {
      setLoading(true);

      await auth.currentUser.reload();

      if (auth.currentUser.emailVerified) {
        const idToken = await auth.currentUser.getIdToken();

        try {
          const result = await dispatch(getAuth(idToken) as any).unwrap();

          if (result.success && result.data) {
            showSuccessToast('Email doğrulandı ve hesabınız aktif edildi.');
            navigation.navigate('Tabs');
          } else {
            showErrorToast(result.message || result.error || 'Hesap aktif edilemedi');
          }
        } catch (authError: any) {
          const errorMessage = authError || 'Backend bağlantı hatası';
          showErrorToast(errorMessage);
        }
      } else {
        showErrorToast('Henüz doğrulanmadı. Lütfen mailinizi kontrol edin.');
      }
    } catch (error) {
      void error;
      showErrorToast('Doğrulama kontrol edilirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenLayout scrollContentStyle={styles.scrollContent}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <ThemedView card style={styles.card}>
            <ThemedText type="title" style={styles.title}>
              Email Doğrulama
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Email adresinizi doğrulamanız gerekiyor
            </ThemedText>

            <ThemedText style={styles.description}>
              Email adresinize gönderdiğimiz doğrulama linkine tıklayın.
              Doğrulama işlemini tamamladıktan sonra &quot;Doğruladım&quot; butonuna basın.
            </ThemedText>

            <View style={styles.buttonContainer}>
              <Button
                title="Doğruladım"
                onPress={checkVerification}
                variant="primary"
                size="large"
                loading={loading}
                disabled={loading}
                style={styles.button}
              />
              <Button
                title="Tekrar Mail Gönder"
                onPress={resend}
                variant="outline"
                size="large"
                loading={resending}
                disabled={resending}
                style={styles.button}
              />
            </View>
          </ThemedView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
}
