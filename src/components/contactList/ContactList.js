import PropTypes from 'prop-types';
import css from './css/contactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
    console.log({ contacts });
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li  key={id} className={css.liContactList}>
                    <p>
                        {name}: {number}
                    </p>
                    <button
                        type="button"
                        onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;