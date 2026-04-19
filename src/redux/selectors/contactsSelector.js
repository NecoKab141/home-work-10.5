// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (store) => store.contacts
// export const selectFilter = (store) => store.filter

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.trim().toLowerCase();

//     if (!normalizedFilter) return contacts;

//     return contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(normalizedFilter) ||
//         contact.phone.toLowerCase().includes(normalizedFilter) ||
//         contact.email.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts;
export const selectFilter = (state) => state.filter;

export const selectContacts = createSelector(
  [selectContactsState],
  (contactsState) => {
    const result = [];

    for (let id of contactsState.allIds) {
      result.push(contactsState.byId[id]);
    }

    return result;
  }
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter.trim().toLowerCase();

    if (!normalized) return contacts;

    const result = [];

    for (let contact of contacts) {
      if (
        contact.name.toLowerCase().includes(normalized) ||
        contact.number.toLowerCase().includes(normalized)
      ) {
        result.push(contact);
      }
    }

    return result;
  }
);
