// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   filter: "",
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },

//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },

//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

// export default contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    byId: {
      "id-1": { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      "id-2": { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      "id-3": { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      "id-4": { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    },
    allIds: ["id-1", "id-2", "id-3", "id-4"],
  },
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      const contact = action.payload;

      state.contacts.byId[contact.id] = contact;
      state.contacts.allIds.push(contact.id);
    },

    deleteContact(state, action) {
      const id = action.payload;

      delete state.contacts.byId[id];

      state.contacts.allIds = state.contacts.allIds.filter(
        item => item !== id
      );
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;