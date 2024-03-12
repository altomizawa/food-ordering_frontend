import { BASE_URL } from './constants';

export const register = ({ password, email, name }) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error('400 - One of the fields is incorrect');
      }
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
    });
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error('400 - One or more fields are missing');
      } else if (response.status === 401) {
        throw new Error('401 - User not found in Database');
      }
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getContent = (token) => {
  if (!token || typeof token !== 'string') {
    throw new Error('400 - The provided token is in the wrong format');
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('401 - The provided token is invalid');
      }
      return res.json();
    })
    .then((data) => data);
};
