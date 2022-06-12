import { useState } from 'react';
import { initialState } from './initialState';

const RegistrationForm = ({ onSubmit }) => {
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

  const { name, email, password } = form;

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="name"
            type="text"
            required
          />
        </div>
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
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};
export default RegistrationForm;
