import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { RootStackParamList } from '@/navigation/types';
import { registerProfile } from '@/store/auth';
import { AppDispatch } from '@/store/store';
import { getFirebaseErrorMessage } from '@/utils/firebaseErrors';
import { showErrorToast,showSuccessToast } from '@/utils/toast';
import { RegisterFormData } from '../screens/validation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useRegister() {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const register = async (data: RegisterFormData) => {
    try {
      setLoading(true);

      let userCredential;
      try {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          try {
            const existingUserCredential = await signInWithEmailAndPassword(
              auth,
              data.email,
              data.password
            );
            const existingUser = existingUserCredential.user;

            if (!existingUser.emailVerified) {
              await deleteUser(existingUser);
              userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
              );
            } else {
              showErrorToast('Bu email adresi zaten kayıtlı. Lütfen giriş yapın.');
              await auth.signOut();
              navigation.navigate('Login');
              return;
            }
          } catch (signInError: any) {
            if (
              signInError.code === 'auth/wrong-password' ||
              signInError.code === 'auth/invalid-credential'
            ) {
              showErrorToast(
                'Bu email adresi zaten kayıtlı. Lütfen giriş yapın veya şifrenizi sıfırlayın.'
              );
              return;
            }
            throw error;
          }
        } else {
          throw error;
        }
      }

      const user = userCredential.user;

      const uid = user.uid;
      const idToken = await user.getIdToken();

      try {
        await dispatch(
          registerProfile({
            data: {
              uid,
              email: data.email,
              name: data.name,
              surname: data.surname,
              phone: data.phone,
            },
            idToken,
          })
        ).unwrap();
      } catch (profileError: any) {
        await deleteUser(user);
        showErrorToast(
          profileError || 'Profil kaydı başarısız oldu. Lütfen tekrar deneyin.'
        );
        return;
      }

      await sendEmailVerification(user);

      showSuccessToast('Hesabınız oluşturuldu. Email doğrulama linki gönderildi.');
      navigation.navigate('VerifyEmail');
    } catch (error) {
      const errorMessage = getFirebaseErrorMessage(error);
      showErrorToast(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
}

