import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  addToken(data.token);
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post('/users/login', body);
  addToken(data.token);
  return data;
};

export const getCurrent = async token => {
  addToken(token);
  try {
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/users/logout');
  removeToken(data.token);
  return data;
};

export default instance;
