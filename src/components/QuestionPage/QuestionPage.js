import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import './QuestionPage.css'
import { Answers } from '../Answers/Answers';

export const QuestionPage = () =>{
    const [questions, setQuestions] = useState();

    let mappedQuestions = [];

    useEffect(() =>{
        Axios.get('https://opentdb.com/api.php?amount=10').then((response) => {setQuestions(response.data.results)})
    },[])

    const mapQuestions = ()  =>{
        console.log("questions", questions);
        mappedQuestions = questions.map(x => x.results);
        console.log("mappedQuestions", mappedQuestions);
    }

    return (
        <div className="question-box">
            <div className="question-text">
                <span>
                    {questions ? ReactHtmlParser(questions[0].question) : 'Brak'}
                </span>
            </div>
            <div>
                <Answers correctAnswer={questions ? questions[0].correct_answer : ''} incorrectAnswers={questions ? questions[0].incorrect_answers : []}></Answers>
            </div>
        </div>
    )
}

export default QuestionPage;

