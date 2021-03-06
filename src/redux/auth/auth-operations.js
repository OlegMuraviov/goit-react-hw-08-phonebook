import { createAsyncThunk } from '@reduxjs/toolkit';
import * as services from '../../shared/services/authApi';

//registration
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const newUser = await services.signUp(data);
      return newUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//login
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signIn(data);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//login with localStore
export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;
      const user = await services.getCurrent(token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//logout
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const user = await services.logOut();
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
