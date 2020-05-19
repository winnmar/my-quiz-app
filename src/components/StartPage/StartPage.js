import React from 'react';
import './StartPage.css'
import { Link, Route } from 'react-router-dom';

export const StartPage = () =>{

    return (
        <div>
            <div className="welcome-box">
                <div className="welcome-text">
                    <span>
                        Welcome to my quiz. Please click start to begin.
                    </span>
                </div>     
                <button className="start-button">
                    <Link to="question-page">
                        <span>
                            Start
                        </span> 
                    </Link>     
                </button>          
            </div>
        </div>
        
    )
}

export default StartPage;