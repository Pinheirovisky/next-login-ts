import { callApiBase } from './base';
import { FormLoginValues } from '../../protocols/auth';
import { AxiosPromise } from 'axios';

const authApi = {
  login: (data: FormLoginValues): AxiosPromise =>
    callApiBase({
      title: 'Auth - Login',
      endpoint: '/login',
      method: 'POST',
      data,
    }),
  logout: (): AxiosPromise =>
    callApiBase({
      title: 'Auth - Logout',
      endpoint: '/logout',
      method: 'POST',
    }),
};

export default authApi;
export { authApi };
