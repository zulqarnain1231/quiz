import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiChevronLeft } from "react-icons/fi";
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
      <button
        onClick={toggleDialouge}
        style={{ color: "white" }}
        className="p-2 rounded-2 border-0 mainGradient"
      >
        Open Dialogue
      </button>
      {/* dialouge here */}
      <Modal show={isOpen} onHide={toggleDialouge} fullscreen={true}>
        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-start overflow-y-auto ">
          {/* header here */}
          <div className="dialogue-header">
            {" "}
            <img className="object-contain logo" src={"/logo.png"} alt="" />
            <button
              onClick={toggleDialouge}
              className="d-flex align-items-center justify-content-center position-absolute rounded-circle p-1 back-button"
            >
              <FiChevronLeft size={20} />
            </button>
          </div>

          <Modal.Body>
            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-start overflow-y-auto ">
              {/* dialogue title here */}
              <div className="dialogue-title">
                <h5 className="text-white fw-medium ">
                  Ecoutez et completez ce dialogue
                </h5>
              </div>
            </div>
          </Modal.Body>

          <div className="w-100 d-flex justify-content-end  align-items-center ">
            <button onClick={toggleDialouge} className="drawer-close-btn">
              Vérifier
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
