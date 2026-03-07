// Redux
// import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from "./actions";

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   filter: "",
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };

//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload,
//         ),
//       };

//     case CHANGE_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };


// Redux toolkit
// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   filter: "",
// };

// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase("contacts/add", (state, action) => {
//       state.contacts.push(action.payload);
//     })

//     .addCase("contacts/delete", (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     })

//     .addCase("filter/change", (state, action) => {
//       state.filter = action.payload;
//     });
// });