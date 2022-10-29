import React from 'react';
import styles from './nav-modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import Ed1 from '../../assets/editorial1.jpg';
import Ed2 from '../../assets/editorial2.jpg';
import Ed3 from '../../assets/editorial3.jpg';
import Ed4 from '../../assets/editorial4.jpg';
import Ed5 from '../../assets/editorial5.jpg';
import Ed6 from '../../assets/editorial6.jpg';
import Ed7 from '../../assets/editorial7.jpg';
import Ed8 from '../../assets/editorial8.jpg';

const EditorialModal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Editorial</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <img src={Ed1} alt="" />
            <img src={Ed2} alt="" />
            <img src={Ed3} alt="" />
            <img src={Ed4} alt="" />
            <img src={Ed5} alt="" />
            <img src={Ed6} alt="" />
            <img src={Ed7} alt="" />
            <img src={Ed8} alt="" />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              {/* <button                                    Will save for potential use later
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button> */}
              {/* <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorialModal;
