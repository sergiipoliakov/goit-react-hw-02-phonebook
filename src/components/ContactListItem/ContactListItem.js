import React from 'react';

const ContactListItem = ({ id, name, number, onRemove }) => (
  <li key={id} className="ContactList-item">
    <p className="ContactList-text">{name}: </p>
    <p className="ContactList-text">{number}</p>
    <div className="ContactList-actions">
      <button type="button" className="ContactList-button" onClick={onRemove}>
        Delete
      </button>
    </div>
  </li>
);

export default ContactListItem;
