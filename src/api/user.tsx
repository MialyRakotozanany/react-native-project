import URLS from '../resources/url';
import {APIFetchParams, JSON_HEADERS} from '../utils/APIProvider';

const User = {
  createUser: (body: any): APIFetchParams => {
    return {
      url: URLS.CREATE_USER,
      method: 'POST',
      body: JSON.stringify(body),
      headers: JSON_HEADERS,
      withCredentials: false,
    };
  },

  signIn: (body: any): APIFetchParams => {
    return {
      url: URLS.SIGN_IN,
      method: 'POST',
      body: JSON.stringify(body),
      headers: JSON_HEADERS,
      withCredentials: false,
    };
  },

  updateUser: (body: any, idUser: string): APIFetchParams => {
    console.log(URLS.CREATE_USER.replace('id', idUser));
    return {
      url: URLS.CREATE_USER.replace('id', idUser),
      method: 'POST',
      body: JSON.stringify(body),
      headers: JSON_HEADERS,
      withCredentials: false,
    };
  },
};

export default User;
