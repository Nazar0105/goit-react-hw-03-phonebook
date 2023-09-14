import React, { Component } from 'react';
import ContactForm from './ContactForm'; 
import Filter from './Filter'; 
import ContactList from './ContactList'; 
import styles from './App.module.css'; 
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    // Завантаження даних з localStorage при завантаженні сторінки
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Збереження даних в localStorage при зміні стану контактів
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  handleFilterChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    // Перевіряємо, чи існує контакт з таким іменем вже в книзі
    const isContactExists = contacts.some((contact) => contact.name === newContact.name);

    if (isContactExists) {
      alert(`${newContact.name} вже є у вашій книзі!`);
      return;
    }

    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={contacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;

