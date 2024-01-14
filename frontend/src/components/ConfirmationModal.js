import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";


const ConfirmationModal = ({ handleMethod, show, setShow, body, type }) => {
  return (
    <>
      <Modal size="sm" show={show} backdrop="static" keyboard={false} className="mt-3">
        <Modal.Body className="py-1">
          <div className="text-center">
            <ButtonGroup>
              <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                Cancel
              </Button>
              <Button variant={type} size="sm" onClick={handleMethod}>
                {body}
              </Button>
            </ButtonGroup>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationModal;