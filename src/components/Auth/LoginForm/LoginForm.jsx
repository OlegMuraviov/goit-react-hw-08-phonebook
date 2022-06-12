import initialState from './initialState';
import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="password"
            type="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
