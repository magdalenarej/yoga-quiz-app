import {Result, Button, Card} from "antd";
import { SmileOutlined } from '@ant-design/icons';
import useQuiz from "../QuizContext";

const ResultCard = () => {
    const { quiz, clearScores } = useQuiz()
    
    
    return(
        <Card>
        <Result
            icon={<SmileOutlined />}
            title={`Hey ${quiz.userName}! Your score is ${quiz.score}/5`}
            extra={<Button type="primary" onClick={()=>{clearScores()}}>New quiz</Button>}
        />
        </Card>
    )
}

export default ResultCard;