import axios from 'axios';

const contatInstance = axios.create({
  baseURL: 'https://64008f7063e89b0913b1bd9b.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contatInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contatInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contatInstance.delete(`/${id}`);
  return data;
};
