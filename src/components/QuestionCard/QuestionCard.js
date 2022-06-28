import {Card, Image, Skeleton} from "antd";
import Questions from "../Questions/Questions";
import useQuiz from "../QuizContext";

const {Meta} = Card;

const QuestionCard = ({question}) => {
    
    const { quiz } = useQuiz()
    
    return (
        <Card
            key={question.id}
            title={`Question ${quiz.quizCounter + 1}/5`}
            style={{width: 300}}
            bordered={false}
            cover={<Image 
                preview={false}
                alt="yoga pose" 
                src={question.img_url} 
                style={{padding: '2rem', height: 300}} 
                placeholder={ <Skeleton.Image style={{height: 300, width: 300}} />}
            />}>
            <Meta title={'sanskrit name:'} style={{padding: '1rem 0'}}/>
            <Questions
                questions={question}
                answer={question.sanskrit_name}
            />
        </Card>
    );
};

export default QuestionCard;