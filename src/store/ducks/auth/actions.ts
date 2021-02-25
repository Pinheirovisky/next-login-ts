/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { FormLoginValues } from '../../../protocols/auth';
import { AuthTypes, AuthUser } from './types';

export const loginRequest = (data: FormLoginValues) =>
  action(AuthTypes.LOGIN_REQUEST, data);

export const loginSucces = (data: AuthUser[]) =>
  action(AuthTypes.LOGIN_SUCCES, data);

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);
