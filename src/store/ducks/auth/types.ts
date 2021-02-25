/**
 * Action types
 */
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCES = '@auth/LOGIN_SUCCES',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  //
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
}

/**
 * Data types
 */
export interface AuthUser {
  id: number;
  name: string;
  country: string;
  avatar: string;
  token: string;
}

/**
 * State types
 */
export interface AuthState {
  readonly data: AuthUser;
  readonly loading: boolean;
  readonly error: boolean;
}
