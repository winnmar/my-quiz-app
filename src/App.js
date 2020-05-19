import React from 'react';
import './App.css';
import StartPage from "./components/StartPage/StartPage";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import QuestionPage from './components/QuestionPage/QuestionPage';
import './components/StartPage/StartPage.css'

function App() {
  return (
    <div className="app">
      <header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={StartPage}></Route>
            <Route path="/question-page" exact component={QuestionPage}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
