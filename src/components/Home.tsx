import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDialouge = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-100 min-h-100 d-flex flex-column  align-items-center justify-content-center"
    >
      <button onClick={toggleDialouge}>Open Dialogue</button>
      {/* dialouge here */}
      <Modal show={isOpen} onHide={toggleDialouge}>
        <h5>Erreur</h5>
        <Modal.Body>
          <p style={{ color: "#1a9900" }} className="fw-bold">
            Tous les champs doivent etre remples
          </p>
        </Modal.Body>

        <div className="w-100 d-flex justify-content-end  align-items-center ">
          <button onClick={toggleDialouge} className="drawer-close-btn">
            Continuer
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
