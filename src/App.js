import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import CreateContact from './Pages/CreateContact';
import EditContact from './Pages/EditContact';
import NavBar from './Navbar/NavBar';

function App() {
  // State for storing contacts
  const [contacts, setContacts] = useState([]);

  return (
    <Router>
      {/* Navigation bar component */}
      <NavBar />

      {/* Routes for different pages */}
      <Routes>
        {/* Main page route */}
        <Route
          exact
          path="/"
          element={<Main contacts={contacts} setContacts={setContacts} />}
        />

        {/* Create contact page route */}
        <Route
          path="/create"
          element={<CreateContact contacts={contacts} setContacts={setContacts} />}
        />

        {/* Edit contact page route */}
        <Route
          path="/edit/:_id"
          element={<EditContact contacts={contacts} setContacts={setContacts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
