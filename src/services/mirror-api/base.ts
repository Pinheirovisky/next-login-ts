/* eslint-disable no-console */
import axios from 'axios';

const apiBase = axios.create({
  baseURL: `${process.env.MIRROR_API_BASE_URL}`,
});

const callApiBase = (call: any) => {
  let { headers } = call;

  const {
    endpoint,
    method = 'GET',
    token = '',
    params = {},
    data = {},
    showJSON = false,
    showConsoleLog = false,
    title = '',
  } = call;

  // Config Headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Client-Device': 'browser',
    'Accept-Language': 'pt-BR',
  };

  headers = { ...headers, ...defaultHeaders };

  if (token) headers.Authorization = `Bearer ${token}`;

  // Helpers for Debug
  if (showConsoleLog) {
    console.log(`[${title} - CALL API COMPLETE]`, {
      headers,
      method,
      endpoint,
      params,
      data,
    });
  }

  if (showJSON) {
    console.log(`[${title} - CALL API JSON DATA]`, JSON.stringify(data));
  }

  apiBase.interceptors.response.use(
    (response) => {
      if (showConsoleLog) {
        console.log(`${title} - RESPONSE`, response);
      }

      return response;
    },
    (error) => {
      // if (error.response.status === 401) {}

      if (showConsoleLog) {
        console.error(`${title} - ERROR`, error);
      }
      // Sentry.captureException(error)
      return Promise.reject(error);
    },
  );

  if (method === 'GET' || method === 'DELETE') {
    return apiBase(endpoint, {
      params: { ...params },
      headers,
      method,
    });
  }

  return apiBase(endpoint, {
    headers,
    method,
    data,
  });
};

export default callApiBase;
export { callApiBase };
