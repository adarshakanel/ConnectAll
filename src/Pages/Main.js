import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main({ contacts, setContacts }) {
    // Function to delete a contact by ID
    const deleteContact = (id) => {
        // Update contacts state by filtering out the contact with the specified ID
        setContacts(contacts.filter((contact) => contact.id !== id));
        // Show an alert to indicate successful deletion
        alert("Contact has been deleted");
    };

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Contacts</h1>
                {contacts.length === 0 ? (
                    // Display a message card when no contacts are available
                    <div className="no-contacts-card">
                        <p>No Contacts Available</p>
                    </div>
                ) : (
                    // Display each contact as a card
                    <div>
                        {contacts.map((contact) => (
                            <div key={contact.id} className="contact-card">
                                <div className="contact-info">
                                    {/* Display contact name and email */}
                                    <div className="name">Name: {contact.firstName} {contact.lastName}</div>
                                    <div className="email">Email: {contact.email}</div>
                                </div>
                                <div className="btn-container">
                                    {/* Button to delete contact */}
                                    <button className="btn btn-delete" onClick={() => deleteContact(contact.id)}>Delete</button>
                                    {/* Button to edit contact */}
                                    <Link className="btn btn-edit" to={`/edit/${contact.id}`}>Edit</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Button to navigate to create contact page */}
                <div className="create-button-container">
                    <Link className="btn btn-create" to="/create">Create Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
