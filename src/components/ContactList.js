import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        {contact.name}: {contact.number}
        <button
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(contact.id)} // Додайте обробник події onClick
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired, // Додайте PropTypes для обробника видалення контакту
};

export default ContactList;
