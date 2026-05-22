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

export const selectContactsState = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;

export const selectContacts = createSelector(
  [selectContactsState],
  (data) => {
    const result = [];
    for (let id of data.allIds) {
      result.push(data.byId[id]);
    }
    return result;
  }
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const norm = filter.toLowerCase();
    const result = [];

    for (let c of contacts) {
      if (
        c.name.toLowerCase().includes(norm) ||
        c.number.toLowerCase().includes(norm)
      ) {
        result.push(c);
      }
    }

    return result;
  }
);
