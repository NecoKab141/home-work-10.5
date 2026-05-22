// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "nanoid";

// import ContactForm from "./components/ContactForm/ContactForm.jsx";
// import ContactList from "./components/ContactList/ContactList.jsx";
// import Filter from "./components/Filter/Filter.jsx";
// import { Box, Title1, Title2 } from "./App.js";

// // import { addContact, deleteContact, changeFilter } from "./redux/actions";
// import { addContact, deleteContact, changeFilter } from "./redux/contactsSlice";
// import { selectFilteredContacts, selectFilter } from "./redux/selectors/contactsSelector.js";

// function App() {
//   const dispatch = useDispatch();

//   const contacts = useSelector(selectFilteredContacts);
//   const filter = useSelector(selectFilter);

//   const handleAddContact = (name, number) => {
//     const exists = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase(),
//     );

//     if (exists) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     dispatch(
//       addContact({
//         id: nanoid(),
//         name,
//         number,
//       }),
//     );
//   };

//   const handleDeleteContact = (id) => {
//     dispatch(deleteContact(id));
//   };

//   const handleChangeFilter = (e) => {
//     dispatch(changeFilter(e.target.value));
//   };

//   const normalizedFilter = filter.toLowerCase();

//   const visibleContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return (
//     <Box>
//       <Title1>Phonebook</Title1>
//       <ContactForm onAddContact={handleAddContact} />

//       <Title2>Contacts</Title2>
//       <Filter value={filter} onChange={handleChangeFilter} />
//       <ContactList
//         contacts={visibleContacts}
//         onDeleteContact={handleDeleteContact}
//       />
//     </Box>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation/Navigation.jsx";
import UserMenu from "./components/UserMenu/UserMenu.jsx";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";

import { Box, Title1, Title2 } from "./App.js";

import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addContact, deleteContact, changeFilter } from "./redux/contactsSlice";

import {
  selectFilteredContacts,
  selectFilter,
  selectContacts,
} from "./redux/selectors/contactsSelector";

function App() {
  const dispatch = useDispatch();

  // auth
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // contacts
  const contacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleAddContact = (name, number) => {
    const exists = allContacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    );

    if (exists) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    );
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const ContactsView = (
    <Box>
      <Title1>Phonebook</Title1>

      <UserMenu />

      <ContactForm onAddContact={handleAddContact} />

      <Title2>Contacts</Title2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </Box>
  );

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/contacts" element={ContactsView} />

        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </>
  );
}

export default App;
