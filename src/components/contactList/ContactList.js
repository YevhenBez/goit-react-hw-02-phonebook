import PropTypes from 'prop-types';
import ContactListElement from '../contactListElement/ContactListElement';

const ContactList = ({ children }) => {
  // console.log(children);
  // console.log(children[1]);
  // console.log(children[3]);

  return (
    <ul>
      {children[1].map(contact => (
        <ContactListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={children[3]}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ContactList;
