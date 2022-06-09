import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getLoading,
  getError,
} from 'redux/contacts/contacts-selector';

import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

import * as operations from '../../redux/contacts/contacts-operations';

const Phonebook = () => {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const addContact = ({ name, phone }) => {
    dispatch(operations.addContact({ name, phone }));
  };

  const removeContact = id => {
    dispatch(operations.removeContact(id));
  };

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterStr = filter.toLowerCase();
    const result = contacts.filter(item => {
      const name = item.name.toLowerCase();
      return name.includes(filterStr);
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={addContact} />
      <h3>Contacts</h3>
      <Filter filter={filter} handleChange={changeFilter} />
      {loading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {Boolean(filteredContacts.length) && (
        <ContactsList
          filteredContacts={filteredContacts}
          removeContact={removeContact}
        />
      )}
    </div>
  );
};

export default Phonebook;
