import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { toast } from 'react-toastify';
import { getFilters } from 'redux/contact/contactSelectors';
import {
  ContactItemLi,
  ContactListUl,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contact/contactOperation';

// import { selectorFilters } from 'redux/filter/filterSelector';


export const ContactList = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectorFilters);

useEffect(() => {
  dispatch(fetchAllContacts());
}, [dispatch]);

const list = useSelector(getFilters);

  const handleContactDelete = id => {
    dispatch(fetchDeleteContact(id));
    toast.info('Contact was deleted');
  };

  // const visibleСontacts = (value, contacts) => {
  //   if (value) {
  //     const visibleСontacts = contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(value)
  //     );
  //     if (visibleСontacts.length === 0) {
  //       toast.success('No contact whit this name');
  //     } else {
  //       return visibleСontacts;
  //     }
  //   }
  //   return contacts;
  // };

  return (
    <ContactListUl>
      {list.map(({ id, name, number }) => { 
        // const { id, name, number } = contact;

        return (
          <ContactItemLi key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber> 
            <ButtonIcon
              icon={AiOutlineDelete}
              iconSize={20}
              onClick={() => handleContactDelete(id)}
            >
            </ButtonIcon>
          </ContactItemLi>
        );
      })}
    </ContactListUl>
  );
};
