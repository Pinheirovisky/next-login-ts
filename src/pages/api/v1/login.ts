/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { authApi } from '../../../services/prod-api';

export default async (req: Request, res: Response) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    let responseAuth = null;
    try {
      responseAuth = await authApi.login({
        email,
        password,
      });
    } catch (error) {
      if (error.response) responseAuth = error.response;
      else return res.status(500).send({ error: 'Login - Generic error' });
    }

    return res.status(responseAuth.status).send(responseAuth.data);
  }

  return null;
};
