import {Button, Card, Input} from "antd";
import {useEffect, useState} from "react";
import {useQuiz} from "../QuizContext";


const Welcome = ({ setIsLogged }) => {

    const {getUserName} = useQuiz();
    const [userName, setUserName] = useState('');
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);

    useEffect(() => {
        userName ? setBtnIsDisabled(false) : setBtnIsDisabled(true);
    }, [userName]);
    
    const onClickHandler = (e) => {
        e.preventDefault();
        getUserName(userName);
        setIsLogged(true)
    }
    
    return (
        <Card style={{padding: '20px', minWidth: 300, textAlign: 'center'}}>
            <h2>Welcome to yoga-quiz!</h2>
            <h3>Please, enter you name to continue</h3>
            <Input
                size="large"
                placeholder="your name"
                onChange={(e) => setUserName(e.target.value)}
                style={{marginTop: '10px'}}
            />
            <Button
                block
                type="primary"
                disabled={btnIsDisabled}
                onClick={(e) => onClickHandler(e)}
                style={{marginTop: '10px'}}
            >Continue</Button>
        </Card>
    );
};

export default Welcome;