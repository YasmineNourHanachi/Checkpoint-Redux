import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/Actions/Actions";
import { Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTask = ({ e }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(e.text);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask({ index: e.id, editedText: editText }));
    closeModal();
  };
  return (
    <div>
      <Button className="btn" onClick={openModal} variant="dark">
        Edit
      </Button>{" "}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          id="ModalInput"
          type="text"
          placeholder="Edit task..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <Button className="Modal-Btn" variant="success" onClick={edit}>
          Update
        </Button>
        <Button className="Modal-Btn" variant="danger" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default EditTask;
