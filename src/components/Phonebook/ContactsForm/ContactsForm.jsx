import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ name: '', number: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ім'я: </label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={form.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />{' '}
      <label htmlFor="number">Телефон: </label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        value={form.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />{' '}
      <button type="submit">Add contact</button>
    </form>
  );
};
export default Form;
