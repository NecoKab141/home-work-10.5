import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import authReducer from "./authSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);