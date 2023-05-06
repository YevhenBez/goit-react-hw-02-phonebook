import React from 'react';
import css from './css/contactForm.module.css';

class ContactForm extends React.Component { 
    state = {
        contacts: [],
        name: ''
    }

    render() {
        return (
            <form>
                <label>
                    Name
                    <input
                        className={css.inputName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
            </form>
        )
    }
}

export default ContactForm;