import React from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
  }
  
  addContact = ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        {/* React homework template */}
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact}/>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </div>
    );
  }
};

export default App;
