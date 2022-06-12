const ContactsList = ({ filteredContacts, removeContact }) => {
  return (
    <div>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              {name}: {number}{' '}
              <button type="button" onClick={() => removeContact(id)}>
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
