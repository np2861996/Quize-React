import { useState } from "react";
import "./App.css";

const questionsAndAnswers = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in React.",
  },
  {
    id: 3,
    question: "What is state in React?",
    answer:
      "State is an object that determines how a component renders and behaves.",
  },
  {
    id: 4,
    question: "What are props in React?",
    answer:
      "Props are inputs to a React component that allow data to be passed from parent to child.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks like HTML, used in React.",
  },
  {
    id: 6,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight in-memory representation of the real DOM.",
  },
  {
    id: 7,
    question: "What is a key in React?",
    answer: "A key is a unique identifier used to identify elements in a list.",
  },
  {
    id: 8,
    question: "What is useState?",
    answer:
      "useState is a React hook that allows you to add state to functional components.",
  },
  {
    id: 9,
    question: "What is useEffect?",
    answer:
      "useEffect is a React hook for handling side effects in functional components.",
  },
  {
    id: 10,
    question: "What is a React hook?",
    answer:
      "React hooks are functions that let you use state and other React features in functional components.",
  },
];

function QuizCards() {
  const [selectedId, setSelectID] = useState(null);

  function handleClick(id) {
    setSelectID(id !== selectedId ? id : null);
  }

  return (
    <div className="quizcard">
      {questionsAndAnswers.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "slected" : ""}
        >
          <p>{question.question}</p>
          <p className="ans">{question.answer}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <QuizCards />
    </div>
  );
}

export default App;
