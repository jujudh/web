import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Mypage from './components/Mypage';
import ExamOptionList from './components/ExamOptionList';
import Download from './components/Download';
import DownloadButton from "./components/DownloadButton";
import QuizComponent from "./components/QuizComponent";
import StopQuiz from "./components/StopQuiz";
import PostMain from "./page/PostMain";
import PostView from "./page/PostView";
import PostWriter from "./page/PostWriter";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/mypage" component={Mypage} />
                <Route path='/examoptionList' component={ExamOptionList} />
                <Route path="/download" component={Download} />
                <Route path="/downloadButton" component={DownloadButton} />
                <Route path="/quiz" component={QuizComponent} />
                <Route path="/stop" component={StopQuiz} />
                <Route exact path='/postView/:no' component={PostView} />
                <Route exact path='/Postmain' component={PostMain} />
                <Route path="/PostWriter" component={PostWriter} />
            </Switch>
        </Router>
    );
};

export default App;