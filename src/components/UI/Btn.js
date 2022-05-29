import { Button } from "antd";


const Btn = ({ text }) => {
    return (
        <Button type="primary" shape="round" size="middle" >{text}</Button>
);
};

export default Btn;