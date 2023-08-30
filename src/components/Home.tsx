import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiChevronLeft } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import Question from "./Question";
import ErrorModal from "./ErrorModal";
const Home = () => {
  const questionsData = [
    {
      question: "Question 1",
      keywords: ["Ǹba!", "Hɛ́rɛ!", "sɔ̀gɔma", "ní", "Hɛ́rɛ"],
      audio: "/audio/q1.mp3",
      iconRight: true,
      inputs: 5,
      questions: [
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <p>Seriba, í ní</p>
              <input type="text" />
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <input type="text" />
              <p> Í </p>
              <input type="text" />
              <p>sɔ̀gɔma.</p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <input type="text" />
              <p> sìra wà? </p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <input type="text" />
            </div>
          ),
        },
      ],
    },
    {
      question: "Question 2",
      keywords: ["sìra", "Ǹse!", "Áw", "ní"],
      audio: "/audio/q2.mp3",
      inputs: 4,
      iconRight: false,
      questions: [
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <input type="text" />
              <p>ní sɔ̀gɔma.</p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <input type="text" />
              <p> Áw ní sɔ̀gɔma.</p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <p>Ǹba! Á</p>
              <input type="text" />
              <p> sɔ̀gɔma..</p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <p>Hɛ́rɛ </p>
              <input type="text" />
              <p> wà?</p>
            </div>
          ),
        },
        {
          question: (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <p>Hɛ́rɛ ! </p>
            </div>
          ),
        },
      ],
    },
    {
      question: "Question 3",
      iconRight: true,
      inputs: 0,
      keywords: ["Ǹba!", "Hɛ́rɛ!", "sɔ̀gɔma", "ní", "Hɛ́rɛ"],
      audio: "/audio/q3.mp3",
      questions: [
        { question: "qustion31" },
        { question: "qustion32" },
        { question: "qustion33" },
        { question: "qustion34" },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const initialInputState = questionsData.reduce((acc, question, index) => {
    acc[`question${index + 1}`] = Array(question.inputs).fill("");
    return acc;
  }, {});
  const [inputs, setInputs] = useState(initialInputState);
  const handleErrorModalToggle = () => {
    setErrorModal((prevvalue) => !prevvalue);
  };
  const toggleDialouge = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const activeQuestion = questionsData[activeQuestionIndex];

  const goToNextQuestion = () => {
    if (activeQuestionIndex < questionsData.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };
  const playAudio = () => {
    const audio = new Audio(activeQuestion.audio);
    audio.play();
    console.log(inputs);
  };
  const handleInputChange = (questionIndex, inputIndex, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [`question${questionIndex + 1}`]: prevInputs[
        `question${questionIndex + 1}`
      ].map((val: any, index: number) => (index === inputIndex ? value : val)),
    }));
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
        <div
          style={{ maxHeight: "100vh" }}
          className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 overflow-y-auto "
        >
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

          <div className="w-100 d-flex flex-column  gap-4 align-items-center justify-content-start ">
            {/* dialogue title here */}
            <div className="dialogue-title">
              <h5 className="text-white fw-medium ">
                Ecoutez et completez ce dialogue
              </h5>
            </div>
            {/* quiz questions here */}
            <div className="quiz-container d-flex flex-column align-items-center justify-content-start rounded-3 ">
              <div className="w-100 d-flex align-items-center justify-content-center py-3 ">
                <button
                  onClick={playAudio}
                  className="d-flex align-items-center justify-content-center rounded-circle border-0 p-2 audio-btn"
                >
                  <HiSpeakerWave size={20} />
                </button>
              </div>
              {/* quiz questions main div */}
              <div className="w-100 d-flex flex-column align-items-center justify-content-start overflow-y-auto quiz-questions-container px-lg-4 px-1">
                {activeQuestion.questions.map((item: any, index: number) => (
                  <Question
                    question={item.question}
                    iconRight={index % 2 == 0 || index == 0}
                  />
                ))}
              </div>
              {/* keywords div here */}
              <div className="w-100 py-4 px-2">
                <div className="w-100 d-flex flex-column align-items-center justify-content-start gap-1 keywords-container px-3 py-1">
                  <p className="fw-semibold">Compléter avec ces mots :</p>
                  <div className="w-100 d-flex flex-wrap  align-items-center justify-content-start gap-2">
                    {activeQuestion.keywords.map(
                      (item: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-2 py-2 px-3 text-white fw-semibold  bg-orange-seconday"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between next-prev-btns">
              <button
                onClick={goToPreviousQuestion}
                disabled={activeQuestionIndex === 0}
                className="p-3 rounded-circle bg-warning border-0 text-white fw-semibold navigation-btn"
              >
                Préc
              </button>
              <button
                onClick={goToNextQuestion}
                disabled={activeQuestionIndex === questionsData.length - 1}
                className="p-3 rounded-circle bg-warning border-0 text-white fw-semibold navigation-btn"
              >
                Suiv
              </button>
            </div>
          </div>
          {/* verify button here */}
          <div className="next-prev-btns d-flex justify-content-start align-items-center mb-4 ">
            <button
              onClick={handleErrorModalToggle}
              className="drawer-close-btn"
            >
              Vérifier
            </button>
          </div>
        </div>
        <ErrorModal open={errorModal} setOpen={handleErrorModalToggle} />
      </Modal>
    </div>
  );
};

export default Home;
