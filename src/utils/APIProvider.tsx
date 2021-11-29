import React, {createContext, useContext} from 'react';
import {useAuth} from './AuthProvider';

const APIContext = createContext({});

export interface APIFetchParams {
  url?: string | any;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
  body?: any;
  headers?: any;
  withCredentials: boolean;
}

export const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

interface APIProviderProps {
  children: any;
}

export const APIProvider = ({children}: APIProviderProps) => {
  const {jwt, logout} = useAuth();

  const useFetch = (apiCall: any) => {
    let requestInfos: APIFetchParams = apiCall();

    let params: any = {
      method: requestInfos.method,
    };

    if (requestInfos.body !== null) {
      params.body = requestInfos.body;
    }

    if (requestInfos.headers !== null) {
      params.headers = requestInfos.headers;
    }

    if (requestInfos.withCredentials) {
      if (params.headers == null) {
        params.headers = {};
      }
      params.headers.Authorization = 'Bearer ' + jwt;
    }

    return fetch(requestInfos.url, params).then(async response => {
      if (response.ok) {
        return response.json();
      }
      // Error
      const json = await response.json();
      if (response.status == 401) {
        throw json.err;
      }
    });
  };

  return (
    <APIContext.Provider value={{useFetch}}>{children}</APIContext.Provider>
  );
};

export const useApi = () => useContext(APIContext) as {useFetch: any};
