import React from 'react';
import css from './css/contactForm.module.css';

class ContactForm extends React.Component { 
    state = {
        name: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
    event.preventDefault();

    
        
    this.props.onSubmit(this.state);

    this.setState({ name: '' });
    };
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        className={css.inputName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">
                    Add contact
                </button>
            </form>
        )
    }
}

export default ContactForm;