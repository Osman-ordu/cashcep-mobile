import { FirebaseError } from 'firebase/app';

export function getFirebaseErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return 'Beklenmeyen bir hata oluştu';
  }

  const firebaseError = error as FirebaseError;

  switch (firebaseError.code) {
    case 'auth/email-already-in-use':
      return 'Bu e-posta adresi zaten kullanılıyor';
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi';
    case 'auth/operation-not-allowed':
      return 'Bu işlem şu anda izin verilmiyor';
    case 'auth/weak-password':
      return 'Şifre çok zayıf. En az 6 karakter olmalıdır';
    case 'auth/user-disabled':
      return 'Bu kullanıcı hesabı devre dışı bırakılmış';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/wrong-password':
      return 'Yanlış şifre';
    case 'auth/invalid-credential':
      return 'Geçersiz e-posta veya şifre';
    case 'auth/too-many-requests':
      return 'Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin';
    case 'auth/network-request-failed':
      return 'Ağ hatası. İnternet bağlantınızı kontrol edin';
    case 'auth/requires-recent-login':
      return 'Bu işlem için tekrar giriş yapmanız gerekiyor';
    default:
      return firebaseError.message || 'Bir hata oluştu. Lütfen tekrar deneyin';
  }
}

