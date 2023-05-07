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

export default ContactList;