import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/auth/auth-operations';

import { Navigate, Routes, Route } from 'react-router-dom';

import PrivateRoute from '../shared/PrivateRoute/PrivateRoute';
import PublicRoute from '../shared/PublicRoute/PublicRoute';

import MainPage from '../pages/MainPage/MainPage';
import PhonebookPage from '../pages/PhonebookPage/PhonebookPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import Navbar from './Navbar/Navbar';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/phonebook" element={<PhonebookPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
