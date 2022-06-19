import React from 'react';

import styles from './Modal.module.scss';

interface Props {
  showModal: boolean;
  setShowModal: any;
  children: React.ReactNode;
  dataTestId?: string;
}

const Modal = ({
  showModal = false,
  setShowModal,
  children,
  dataTestId,
}: Props) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowModal && setShowModal(false);
  };

  if (!showModal) return <></>;

  return (
    <div className={styles.bgBlocker} data-testid={dataTestId}>
      <div className={styles.modal}>
        <div
          className={styles.closeButton}
          onClick={(e) => handleClose(e)}
          aria-hidden="true"
        >
          <div className={styles.crossRight}></div>
          <div className={styles.crossLeft}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
