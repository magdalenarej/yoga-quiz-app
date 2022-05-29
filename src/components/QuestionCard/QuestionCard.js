import { Card } from "antd";
import Questions from "../Questions/Questions";

const { Meta } = Card;

const QuestionCard = ({question, questionCounter, onClick}) => {
    return(
        <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="yoga pose" src={question.img_url} style={{padding: '2rem'}} />}>
            <Meta title={'sanskrit name:'}/>
            <Questions answers={question.answers} questionCounter={questionCounter} onClick={onClick}/>
           
        </Card>
    )
}

export default QuestionCard;