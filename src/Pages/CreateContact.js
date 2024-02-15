import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateContact.css';
import { v4 as uuidv4 } from 'uuid';

function CreateContact({ contacts, setContacts }) {
    // Use navigate hook for navigation
    const navigate = useNavigate();

    // State for storing new contact data
    const [newContact, setNewContact] = useState({
        email: "",
        firstName: "",
        lastName: ""
    });

    // Function to handle changes in contact values
    const changeContactValue = (e, valueType) => {
        // Update new contact state with changed value
        setNewContact({ ...newContact, [valueType]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if a contact with the same email already exists
        const existingContact = contacts.find(contact => contact.email === newContact.email);
        if (existingContact) {
            alert('A contact with this email address already exists.');
            return;
        }

        // Perform validation for first name
        if (newContact.firstName.length < 3 || newContact.firstName.length > 25) {
            alert('First Name must be between 3 and 25 characters.');
            return;
        }

        // Optional: Validate Last Name if provided
        if (newContact.lastName && (newContact.lastName.length < 2 || newContact.lastName.length > 30)) {
            alert('Last Name must be between 2 and 30 characters.');
            return;
        }

        // Add the new contact and navigate back to the main page
        addContact(newContact);
        navigate('/');
    };

    // Function to add a new contact
    const addContact = (contact) => {
        // Assign a unique ID to the contact using uuidv4
        contact.id = uuidv4();
        // Update contacts state with the new contact
        setContacts([...contacts, contact]);
    };

    return (
        <div className="create-container">
            <div className="card">
                <h1 className="title">Create Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address:</label>
                        <input
                            type="email"
                            value={newContact.email}
                            onChange={(e) => changeContactValue(e, "email")}
                            placeholder="Enter email address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={newContact.firstName}
                            onChange={(e) => changeContactValue(e, "firstName")}
                            placeholder="Enter first name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={newContact.lastName}
                            onChange={(e) => changeContactValue(e, "lastName")}
                            placeholder="Enter last name (optional)"
                        />
                    </div>
                    <div className="create-btn-container">
                        <button type="submit" className="btn btn-create">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateContact;
