import { useCallback, useEffect } from "react"
import { createPortal } from "react-dom";
import ButtonIcon from "shared/Buttons/ButtonIcon";
import { CgClose } from 'react-icons/cg';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClick, showModal, id}) => {
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
          {/* <EditContactForm data={data} toggleModal={onClick} /> */}
        </div>
      </div>,
      modalRoot
    );
};