import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { signUp, signIn, getCurrentUser, logOut } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //реєстрація нового юзера
    [signUp.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signUp.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      ...payload,
    }),
    [signUp.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //логін юзера
    [signIn.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [signIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.token = payload.token;
      store.user = payload.user;
    },
    [signIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //отримання даних юзера по токену з локалсторедж
    [getCurrentUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload;
    },
    [getCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = '';
    },
    //логаут юзера
    [logOut.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [logOut.fulfilled]: store => {
      store.loading = false;
      store.isLogin = false;
      store.token = '';
      store.user = {};
    },
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
