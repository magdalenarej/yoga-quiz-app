import './App.css';
import {Layout, Menu} from "antd";
import {QuizProvider} from './components/QuizContext';
import QuizContent from "./components/QuizContent";
import HeaderNav from "./components/HeaderNav/HeaderNav";


const {Content} = Layout;

function App() {

    return (
        <Layout style={{height: '100vh'}} className="bg">
            <QuizProvider>
                <HeaderNav/>
                <Content style={{margin: "0 auto", padding: '2rem'}}>
                    <QuizContent/>
                </Content>
            </QuizProvider>
        </Layout>
    );
}

export default App;
