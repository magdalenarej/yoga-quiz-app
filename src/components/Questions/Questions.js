import {Radio, Button, Space, Card} from "antd";
import useQuiz from "../QuizContext";

const Questions = ({answers, question}) => {

    const { nextQuestion, addScore } = useQuiz()

    const getAnswerHandler = (e) => {
        e.preventDefault();
        nextQuestion();
        if (e.target.innerText === question.sanskrit_name) {
           addScore()
        }}
    

        return (
            
            <Radio.Group style={{width: '100%'}} >
                <Space direction="vertical" style={{width: '100%'}}>
                    {answers.map(answer => {
                        return( 
                        <Button 
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
