import { useCallback, useEffect } from "react"
import { createPortal } from "react-dom";
import ButtonIcon from "shared/Buttons/ButtonIcon";
import { CgClose } from 'react-icons/cg';
import { ContactForm } from "components/ContactForm/ContactForm";
import { fetchAllContacts } from "redux/contacts/contactsOperations";



const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClick, showModal, id }) => {
  const { contact } = fetchAllContacts(id);

  const closeModal = useCallback(({ code, target, currentTarget }) => {
    if (target === currentTarget || code === 'Escape') {
        onclick();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown, closeModal');
  }, [closeModal, onClick]);

    return createPortal(
      <div onClick={closeModal}>
        <div>
          <ButtonIcon
            icon={CgClose}
            iconSize={20}
            text="close button"
            onClick={onClick}
            round={true}
          />
          
          <ContactForm contact={contact} toggleModal={onClick} />
        </div>
      </div>,
      modalRoot
    );
};