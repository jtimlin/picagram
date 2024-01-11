import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

import Card from "react-bootstrap/Card";

import ConfirmationModal from "../../components/ConfirmationModal";
import Avatar from "../../components/Avatar";

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
    showMessage,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

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
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/notifications/${id}`);
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.filter((notification) => notification.id !== id),
      }));
    } catch (err) {
      console.log(err);
    } finally {
      showMessage("success", "Notification cleared.");
    }
  };

  return (
    <>
      <Card className="mt-3 me-3 border-secondary" bg="light">
        <Card.Header className="d-flex justify-content-between">
        {isRead ? (
          <>
            <i className="fa-solid fa-envelope me-2"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </>
        ) : null}

          <small className="text-muted">{sentAt}             
          <span>
              <span
                aria-label="Clear"
                title="Clear Notification"
                onClick={handleShowModal}
              >
                <i class="fa-regular fa-trash-can"></i>
              </span>
              {isRead ? (
                <span onClick={handleSetRead}>
                  <i class="fa-solid fa-circle-check"></i>
                </span>
              ) : (
                <span onClick={handleSetRead}>
                  <i class="fa-regular fa-circle-check"></i>
                </span>
              )}
            </span></small>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Avatar src={senderAvatar} height={30} /> {content}{category !== "follow" && ( <Link to={`/posts/${itemId}`} className="ms-sm-2">• Go to post</Link> )}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between flex-wrap gap-2">

          </Card.Text>
        </Card.Body>
      </Card>

      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        type="dark"
      />
    </>
  );
};

export default Notification;