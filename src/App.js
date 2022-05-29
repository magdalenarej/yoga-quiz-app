import './App.css';
import QuestionCard from "./components/QuestionCard/QuestionCard";
import data from './data/data'
import {useState} from "react";

const questions = data;

function App() {
    const questionsSet = questions.sort(() => Math.random() - 0.5).filter((el, i) => i < 5);
    const [questionCounter, setQuestionCounter] = useState(0);
    
    return (
        <div className="App">
            <QuestionCard question={questionsSet[questionCounter]} onClick={setQuestionCounter} questionCounter={questionCounter} />
        </div>
    );
}

export default App;
