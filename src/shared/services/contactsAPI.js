import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://64008f7063e89b0913b1bd9b.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactInstance.delete(`/${id}`);
  return data;
};

export const editContact = async id => {
  const { data } = await contactInstance.put(`/${id}`);
  return data;
};