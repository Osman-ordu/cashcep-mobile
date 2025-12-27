import { axiosInstance } from './axiosInstance';
import { tokenService } from './tokenService';
// import { showErrorToast, showSuccessToast } from '@/utils/toast';

interface CallApiProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  params?: any;
  silent?: boolean;
}

export const CallApi = async ({
  method,
  url,
  data,
  params,
  silent = false,
}: CallApiProps) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });

    if (!silent) {
      // showSuccessToast('Operation successful');
    }

    return response.data;
  } catch (error: any) {
    const status = error?.response?.status;

    if (status === 401) {
      await refreshToken();
    }

    // showErrorToast(
    //   error?.response?.data?.message || 'Connection failed'
    // );

    throw error;
  }
};

const refreshToken = async () => {
  const token = await tokenService.getToken();
  const refreshToken = await tokenService.getRefreshToken();

  const response = await axiosInstance.post('/api/Auth/refreshToken', {
    token,
    refreshToken,
  });

  await tokenService.setToken(response.data.token);
  await tokenService.setRefreshToken(response.data.refreshToken);
};
