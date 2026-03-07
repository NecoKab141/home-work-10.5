import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import { Box, Title1, Title2 } from "./App.js";

// import { addContact, deleteContact, changeFilter } from "./redux/actions";
import { addContact, deleteContact, changeFilter } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleAddContact = (name, number) => {
    const exists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
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

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <Box>
      <Title1>Phonebook</Title1>
      <ContactForm onAddContact={handleAddContact} />

      <Title2>Contacts</Title2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Box>
  );
}

export default App;
