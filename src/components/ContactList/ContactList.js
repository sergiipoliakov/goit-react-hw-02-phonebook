import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
