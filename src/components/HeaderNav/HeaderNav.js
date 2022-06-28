import useQuiz from "../QuizContext";
import {Header} from "antd/es/layout/layout";

const HeaderNav = () => {
    const {quiz} = useQuiz();

    return <Header>
        <div style={{color: 'white', fontSize: 24, fontWeight: 'bolder', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', minWidth: 280, maxWidth: 1200, margin: '0 auto'}}>
            <span>yoga quiz</span>
            <span>{quiz.userName ? `Hello ${quiz.userName}` : 'Hi there!'}</span>
        </div>

    </Header>;
};

export default HeaderNav;