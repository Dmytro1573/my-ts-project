import Modal from "react-modal";

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ImageModal({ isModalOpen, onIsClose, ImageUrl }) {
  return (
    <>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={onIsClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={onIsClose}>&times</button>
          <img src={ImageUrl} alt="Large photo" />
        </Modal>
      </div>
    </>
  );
}
