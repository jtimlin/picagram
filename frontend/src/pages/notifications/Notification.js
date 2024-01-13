import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

import Card from "react-bootstrap/Card";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ConfirmationModal from "../../components/ConfirmationModal";
import Avatar from "../../components/Avatar";

import appStyles from "../../App.module.css";
import styles from "../../styles/Notifications.module.css"

const Notification = (props) => {
  const {
    id,
    profile_image: senderAvatar,
    created_at: sentAt, 
    item_id: itemId,
    is_read: isRead,
    content,
    category,
    setNotifications,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  // function to handle notification is read
  const handleSetRead = async () => {
    try {
      await axiosRes.patch(`/notifications/${id}`, { is_read: !isRead });
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.map((notification) => {
          return notification.id === id ? { ...notification, is_read: !isRead } : notification;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  // function to handle deletion of notification
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/notifications/${id}`);
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.filter((notification) => notification.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <Card className={`${appStyles.ContentBlack} mt-3 me-3 ${isRead ? styles.ContentBlackRead : ''}`}>
        <Card.Header className="d-flex justify-content-between">
          <small className="">{sentAt}</small>      
          <span>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Clear Notification!</Tooltip>}
              >
                <span
                  aria-label="Clear"
                  title="Clear Notification"
                  onClick={handleShowModal}
                >
                  <i className="fa-regular fa-trash-can" />
                </span>
              </OverlayTrigger>
              {isRead ? (
                <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Mark as unread!</Tooltip>}
                >
                  <span onClick={handleSetRead}>
                    <i className="fa-solid fa-circle-check" />
                  </span>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Mark as read!</Tooltip>}
                >
                  <span onClick={handleSetRead}>
                    <i className="fa-regular fa-circle-check" />
                  </span>
                </OverlayTrigger>
              )}
            </span>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Avatar src={senderAvatar} height={30} /> {content}{category !== "follow" && ( <Link to={`/posts/${itemId}`} className="ms-sm-2">• Go to post...</Link> )}
          </Card.Text>
        </Card.Body>
      </Card>

      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        body="Clear notification!"
        type="dark"
      />
    </>
  );
};

export default Notification;