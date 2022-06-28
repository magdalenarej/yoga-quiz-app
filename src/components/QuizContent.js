import Welcome from "./Welcome/Welcome";
import QuestionCard from "./QuestionCard/QuestionCard";
import ResultCard from "./ResultCard/ResultCard";
import {useState} from "react";
import useQuiz from "./QuizContext";
import data from "../data/data";

const questions = data;

const QuizContent = () => {
    const questionsSet = questions.sort(() => Math.random() - 0.5).filter((el, i) => i < 5);
    const [isLogged, setIsLogged] = useState(false);
    const {quiz} = useQuiz();

    return <div>
        {!isLogged && <Welcome setIsLogged={setIsLogged}/>}
        {isLogged && quiz.quizCounter < 5 && <QuestionCard question={questionsSet[quiz.quizCounter]}/>}
        {isLogged && quiz.quizCounter >= 5 && <ResultCard/>}
    </div>;
};

export default QuizContent;