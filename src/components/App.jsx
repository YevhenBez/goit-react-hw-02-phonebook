import ContactForm from './contactForm/ContactForm';

export const App = () => {
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
        <ContactForm />
        <h2>Contacts</h2>
      </div>
    </div>
  );
};
