import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://629db9af3dda090f3c09283b.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);

  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
