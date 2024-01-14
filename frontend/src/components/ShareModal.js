import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import styles from '../styles/ShareButton.module.css'

// Share modal for sharing posts to other platforms
const ShareModal = ({ isOpen, onClose, shareUrl, title }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Body>
        <div className="text-center">
          <div>
            <FacebookShareButton url={shareUrl} quote={title}>
              <div className={styles.ShareButtonDiv}>
                <i className="fa-brands fa-facebook-f" data-testid="share-modal-facebook"/>
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={title}>
              <div className={styles.ShareButtonDiv}>
                <i className="fa-brands fa-x-twitter" data-testid="share-modal-x"/>
              </div>
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} title={title}>
              <div className={styles.ShareButtonDiv}>
                <i className="fa-brands fa-whatsapp" data-testid="share-modal-whatsapp"/>
              </div>
            </WhatsappShareButton>

            <Button variant="dark" onClick={onClose}>
              <i className="fa-solid fa-xmark" />
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;
