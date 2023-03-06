import { createSelector } from '@reduxjs/toolkit';


export const selectAllContacts = ({ contacts }) => contacts.items;

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};


export const selectContacts = state => state.contacts.items;

export const selectContactsCount = createSelector([selectContacts], contacts => {

  return contacts.reduce(
    (count, contacts) => {
      if (contacts) {
        count.contacts += 1;
      }
      return count;
    },
    { contacts: 0 }
  );
});
