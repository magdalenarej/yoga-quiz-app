import {createContext, useContext, useReducer} from "react";
import quizReducer, {initialState} from './quizReducer';

const QuizContext = createContext(initialState);

export const QuizProvider = ({children}) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    const nextQuestion = () => {
        dispatch({type: 'NEXT_QUESTION'});
    };

    const addScore = () => {
        dispatch({type: "ADD_SCORE"});
    };

    const getUserName = (userName) => {
        dispatch({
            type: "GET_USER_NAME",
            payload: userName
        });
    };
    
    const clearScores = () => {
        dispatch({
            type: "CLEAR_SCORES"
        })
        dispatch({
            type: "CLEAR_COUNTER"
        })
    }
    
    

    const value = {
        quiz: state,
        getUserName,
        addScore,
        nextQuestion,
        clearScores
    };
    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>;
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    return context;
};

export default useQuiz;