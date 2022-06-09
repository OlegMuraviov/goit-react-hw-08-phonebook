import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../../shared/services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await Api.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await Api.addContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    //проверка на добавление существующего контакта
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const seachedValue = data.name.toLowerCase();
      const dublicate = contacts.items.find(
        item => item.name.toLowerCase() === seachedValue
      );
      if (dublicate) {
        alert(`${data.name} is already in book list`);
        return false;
      }
      return data;
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      const { id: deleteId } = await Api.removeContact(id);
      return deleteId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
