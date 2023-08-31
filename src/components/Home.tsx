import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiChevronLeft } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";
import { DiAndroid } from "react-icons/di";
import Question from "./Question";
import ErrorModal from "./ErrorModal";
import QuizProgressBar from "./QuizProgressBar";
import { Button } from "react-bootstrap";

type Blanks = {
  blank1: string;
  blank2: string;
  blank3: string;
  blank4: string;
  blank5: string;
};

const Home = () => {
  const [qInputs, setQInputs] = useState<Blanks>({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
  });
  // const [q1Inputs, setQ1Inputs] = useState<Blanks>({
  //   blank1: "",
  //   blank2: "",
  //   blank3: "",
  //   blank4: "",
  //   blank5: "",
  // });
  // const [q2Inputs, setQ2Inputs] = useState<Blanks>({
  //   blank1: "",
  //   blank2: "",
  //   blank3: "",
  //   blank4: "",
  //   blank5: "",
  // });
  // const handleQ2Inputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setQ2Inputs({ ...q2Inputs, [name]: value });
  // };
  // const handleQ1Inputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setQ1Inputs({ ...q1Inputs, [name]: value });
  // };
  const questionsData = [
    {
      question: "Question1",

      keywords: ["Ǹba!", "Hɛ́rɛ!", "sɔ̀gɔma", "ní", "Hɛ́rɛ"],
      audio: "/audio/q1.mp3",
      iconRight: true,
      inputs: 5,
      questions: [
        {
          inputs: 1,
          inputFirst: true,
          input1Name: "blank1",
          text1: "Seriba, í ní",
          icon: <BiSolidUser className="text-warning" size={30} />,
        },
        {
          inputs: 2,
          input1Name: "blank2",
          input2Name: "blank3",
          text1: "Í",
          text2: "sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning flex-shrink-0 " size={30} />,
        },
        {
          inputs: 1,
          inputFirst: true,
          input1Name: "blank4",
          text1: "sìra wà?",
          icon: <BiSolidUser className="text-warning" size={30} />,
        },
        {
          inputs: 1,
          inputFirst: true,
          input1Name: "blank5",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
      ],
    },
    {
      question: "Question2",
      keywords: ["sìra", "Ǹse!", "Áw", "ní"],
      audio: "/audio/q2.mp3",
      inputs: 4,
      iconRight: false,
      questions: [
        {
          inputs: 1,
          inputFirst: true,
          input1Name: "blank1",
          text1: "ní sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          inputs: 1,
          inputFirst: true,
          input1Name: "blank2",
          text1: "ní sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          inputs: 1,
          inputFirst: false,
          input1Name: "blank3",
          text1: "Ǹba! Á",
          text2: "sɔ̀gɔma..",
          inputMiddle: true,
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          inputs: 1,
          inputFirst: false,
          input1Name: "blank4",
          text1: "Hɛ́rɛ",
          text2: "wà?",
          inputMiddle: true,
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          inputs: 0,
          inputFirst: false,
          text1: "Hɛ́rɛ ! ",
          icon: <BiSolidUser className="text-warning" size={30} />,
        },
      ],
    },
    // {
    //   question: "Question3",
    //   iconRight: true,
    //   inputs: 0,
    //   audio: "/audio/q3.mp3",
    //   questions: [
    //     {
    //       question: "qustion31",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion32",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion33",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion34",
    //       icon: <DiAndroid className="text-warning" size={30} />,
    //     },
    //   ],
    // },
  ];
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const incrementProgressBar = () => {
    setProgress((prevvalue) => prevvalue + 1);
  };

  const handleErrorModalToggle = () => {
    setErrorModal((prevvalue) => !prevvalue);
  };
  const toggleDialouge = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const [activeQuestion, setActiveQuestion] = useState(
    questionsData[activeQuestionIndex]
  );

  const [activeQuestionKeyWords, setActiveQuestionKeyWords] = useState(
    activeQuestion.keywords
  );

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
  };

  const [currentBlankIndex, setCurrentBlankIndex] = useState(1);

  const handleKeyWord = (item: string) => {
    const currentQuestionInputs = qInputs;

    const newInputs = { ...currentQuestionInputs };
    const inputName = `blank${currentBlankIndex}`;

    newInputs[inputName] = item;

    const nextBlankIndex = Math.min(currentBlankIndex + 1, 5);
    setCurrentBlankIndex(nextBlankIndex);
    setQInputs(newInputs);

    const filteredKeywords = activeQuestionKeyWords?.filter(
      (keyword) => keyword !== item
    );
    setActiveQuestionKeyWords(filteredKeywords);
    incrementProgressBar();
  };

  useEffect(() => {
    const newActiveQuestion = questionsData[activeQuestionIndex];
    setActiveQuestion(newActiveQuestion);
    setActiveQuestionKeyWords(newActiveQuestion.keywords);
    console.log(activeQuestion);
    setProgress(0);
    setQInputs({
      blank1: "",
      blank2: "",
      blank3: "",
      blank4: "",
      blank5: "",
    });
    // setQ2Inputs({
    //   blank1: "",
    //   blank2: "",
    //   blank3: "",
    //   blank4: "",
    //   blank5: "",
    // });
    setCurrentBlankIndex(1);
  }, [activeQuestionIndex]);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-100 min-h-100 d-flex flex-column  align-items-center justify-content-center"
    >
      {/* <button
        onClick={toggleDialouge}
        style={{ color: "white" }}
        className="p-2 rounded-2 border-0 mainGradient"
      >
        Open Dialogue
      </button> */}
      {/* dialouge here */}
      <Modal show={true} onHide={toggleDialouge} fullscreen={true}>
        <div
          style={{ maxHeight: "100vh" }}
          className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 overflow-y-auto "
        >
          {/* header here */}
          {/* <div className="dialogue-header">
            {" "}
            <img className="object-contain logo" src={"/logo.png"} alt="" />
            <button
              onClick={toggleDialouge}
              className="d-flex align-items-center justify-content-center position-absolute rounded-circle p-1 back-button"
            >
              <FiChevronLeft size={20} />
            </button>
          </div> */}
          <div className="w-100">
            <QuizProgressBar
              progress={progress}
              totalQuestions={activeQuestion.inputs}
            />
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
                    key={index}
                    icon={item.icon}
                    inputFirst={item?.inputFirst}
                    inputMiddle={item?.inputMiddle}
                    input1Name={item?.input1Name}
                    input2Name={item?.input2Name}
                    text1={item?.text1}
                    text2={item?.text2}
                    inputs={item?.inputs}
                    state={qInputs}
                    iconRight={index % 2 == 0 || index == 0}
                  />
                ))}
              </div>
              {/* keywords div here */}
              <div className="w-100 py-4 px-2">
                <div className="w-100 d-flex flex-column align-items-center justify-content-start gap-1 keywords-container px-3 py-1">
                  {activeQuestionKeyWords?.length > 0 ? (
                    <p className="fw-semibold">Compléter avec ces mots :</p>
                  ) : (
                    <button
                      className="text-white w-100 rounded-2 py-2 bg-warning  border-0 fw-semibold "
                      onClick={() => {
                        setActiveQuestionKeyWords(activeQuestion.keywords);
                        setQInputs({
                          blank1: "",
                          blank2: "",
                          blank3: "",
                          blank4: "",
                          blank5: "",
                        });
                        // setQ2Inputs({
                        //   blank1: "",
                        //   blank2: "",
                        //   blank3: "",
                        //   blank4: "",
                        //   blank5: "",
                        // });
                        setCurrentBlankIndex(1);
                        setProgress(0);
                      }}
                    >
                      {" "}
                      Renitialiser Préc
                    </button>
                  )}

                  <div className="w-100 d-flex flex-wrap  align-items-center justify-content-start gap-2">
                    {activeQuestionKeyWords?.map(
                      (item: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => handleKeyWord(item)}
                          className="rounded-2 border-0  py-2 px-3 text-white fw-semibold  bg-orange-seconday"
                        >
                          {item}
                        </button>
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
              onClick={() => {
                setErrorModal(true);
                const audio = new Audio("/audio/wrong.mp3");
                audio.play();
              }}
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
