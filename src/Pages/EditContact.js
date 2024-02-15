import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./EditContact.css"

function EditContact({ contacts, setContacts }) {
    // State for storing updated contact data
    const [updatedContact, setUpdatedContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        id: ""
    });

    // Extracting _id from route parameters
    const { _id } = useParams();

    // Hook for navigation
    const navigate = useNavigate();

    // Effect to load contact data for editing
    useEffect(() => {
        const contactToUpdate = contacts.find(contact => contact.id === _id);
        if (contactToUpdate) {
            setUpdatedContact({
                firstName: contactToUpdate.firstName,
                lastName: contactToUpdate.lastName,
                email: contactToUpdate.email,
                id: contactToUpdate.id
            });
        }
    }, [contacts, _id]);

    // Function to handle changes in contact values
    const changeContactValue = (e, valueType) => {
        setUpdatedContact({ ...updatedContact, [valueType]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate first name
        if (!updatedContact.firstName.trim()) {
            alert('First Name cannot be blank.');
            return;
        }

        // Find index of contact to update
        const contactIndex = contacts.findIndex(contact => contact.id === _id);

        if (contactIndex !== -1) {
            // Create a copy of contacts array to update
            const updatedContacts = [...contacts];
            // Update the contact at the specified index
            updatedContacts[contactIndex] = {
                ...updatedContacts[contactIndex],
                firstName: updatedContact.firstName,
                lastName: updatedContact.lastName
            };
            // Update contacts state with the modified array
            setContacts(updatedContacts);
            // Navigate back to main page
            navigate("/");
        }
    };

    return (
        <div className="edit-container">
            <div className="content">
                <h1 className="title">Edit contacts</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter first name"
                            value={updatedContact.firstName}
                            onChange={(e) => changeContactValue(e, "firstName")}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter last name"
                            value={updatedContact.lastName}
                            onChange={(e) => changeContactValue(e, "lastName")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address:</label>
                        <input
                            type="email"
                            value={updatedContact.email}
                            readOnly // Make the email input readonly
                            className="readonly"
                            disabled
                        />
                    </div>
                    <div className="end-btn-container">
                        <button className="btn btn-edit" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditContact;
