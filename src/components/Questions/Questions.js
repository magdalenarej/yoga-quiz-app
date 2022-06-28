import {Radio, Button, Space, Card} from "antd";
import useQuiz from "../QuizContext";

const Questions = ({questions}) => {

    const { nextQuestion, addScore } = useQuiz()
    

    const getAnswerHandler = (e) => {
        e.preventDefault();
        nextQuestion();
        if (e.target.innerText === questions.sanskrit_name) {
           addScore()
        }}
    
        return (
            <Radio.Group style={{width: '100%'}} >
                <Space direction="vertical" style={{width: '100%'}}>
                    {questions.answers.map(answer => {
                        return( 
                        <Button 
                            key={answer}
                            type="primary" 
                            block 
                            value={answer}
                            onClick={e => getAnswerHandler(e)}
                        >
                            {answer}
                        </Button>);
                    })}
                </Space>
            </Radio.Group>
        );
    };


export default Questions;
