import request from '@/utils/request';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  u_id: string;
  username: string;
  token: string;
  email: string;
  mobile_phone: string;
  role: string;
}

export const login = (data: LoginData): Promise<LoginResponse> => {
  return request({
    url: '/api/users/login',
    method: 'post',
    data
  });
}