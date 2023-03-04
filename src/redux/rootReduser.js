import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contact/contactSlice';
import filterReducer from './filter/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});


