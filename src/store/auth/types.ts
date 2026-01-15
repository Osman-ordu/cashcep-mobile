export interface AuthRequest {

  }

  export interface UserData {
    id: string;
    firebaseUid: string | null;
    email: string;
    phone: string | null;
    provider: string | null;
    emailVerified: boolean;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface AuthResponse {
    success: boolean;
    message: string;
    data?: UserData;
    error?: string;
  }

  export interface AuthState {
    data: AuthResponse | null;
    isLoading: boolean;
    error: string | null;
  }

  export interface RegisterProfileRequest {
    uid: string;
    email: string;
    name: string;
    surname: string;
    phone: string;
  }

  export interface RegisterProfileResponse {
    success: boolean;
    message: string;
    data?: any;
    error?: string;
  }