const ContactsList = ({ filteredContacts, removeContact }) => {
  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, phone } = contact;
          return (
            <li key={id}>
              {name}: {phone}{' '}
              <button type="button" onClick={e => removeContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactsList;
