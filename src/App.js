import './App.css';
import data from './data/data';
import {Layout, Menu} from "antd";
import {QuizProvider} from './components/QuizContext';
import QuizContent from "./components/QuizContent";


const {Header, Content} = Layout;

const questions = data;

function App() {
    const questionsSet = questions.sort(() => Math.random() - 0.5).filter((el, i) => i < 5);
    
    
    return (
        <Layout style={{ height: '100vh'}} className='bg'>
            <Header/>
            <Content style={{margin: "0 auto", padding: '2rem'}}>
              <QuizProvider>
                  <QuizContent />
                
              </QuizProvider>
            </Content>
        </Layout>
    );
}

export default App;
