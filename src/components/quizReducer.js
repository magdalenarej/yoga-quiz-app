export const initialState = {
    quizCounter: 0,
    score: 0,
    userName: '',
}

const quizReducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case "NEXT_QUESTION":
            return {...state, quizCounter: state.quizCounter + 1}
        case "ADD_SCORE":
            return {...state, score: state.score + 1}
        case "GET_USER_NAME":
            return {...state, userName: payload}
        case "CLEAR_SCORES":
            return {...state, score: 0}
        case "CLEAR_COUNTER":
            return {...state, quizCounter: 0}
        default:
            return 
    }
}

export default quizReducer;