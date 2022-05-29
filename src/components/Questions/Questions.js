import {Radio, Button, Space} from "antd";
import {useState} from "react";


const Questions = ({ answers, questionCounter, onClick }) => {
const [value, setValue] = useState(null);

const onChange = (e) => {
    setValue(e.target.value);
};
    return(
        <Radio.Group onChange={onChange} value={value} style={{padding: '1rem'}}>
            <Space direction="vertical">
                {answers.map(answer => {
                    return <Button type='primary' value={answer} onClick={(e) => {
                        e.preventDefault();
                        onClick(questionCounter + 1);
                    }}>{answer}</Button>
                })}
            </Space>
        </Radio.Group>
    )
}

export default Questions;