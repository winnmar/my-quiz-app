import React, { useEffect, useState } from 'react';

export const Answers = (props) =>{
    return (
        <div>
            <div>{props.incorrectAnswers ? props.incorrectAnswers[0] : "Wait.."}</div>
            <div>{props.correctAnswer ? props.correctAnswer : "Wait..."}</div>
        </div>
    )
}