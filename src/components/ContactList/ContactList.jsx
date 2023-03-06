
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { AiOutlineDelete } from 'react-icons/ai';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { toast } from 'react-toastify';
import {
  ContactItemLi,
  ContactListUl,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);

  const handleContactDelete = id => {
    dispatch(fetchDeleteContact(id));
    toast.info('Contact was deleted');
  };


  return (
    <ContactListUl>
      {list.map(({ id, name, phone }) => { 

        return (
          <ContactItemLi key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{phone}</ContactNumber> 
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
