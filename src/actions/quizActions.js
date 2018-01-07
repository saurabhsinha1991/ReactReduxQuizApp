import axios from 'axios';
import { debug } from 'util';

export function getQuestions(questions) {
    const request = axios.get('/getQuestion');

    return (dispatch) => {
        request.then((response) => {
            dispatch({ type: 'GET_QUESTIONS', payload: response.data.questions })
        })
    }
}

export function updateAnswers(answer) {
    return {
        type: 'SELECTED_ANSWER',
        answer: answer
    }
}

export function validateAnswer( answers ) {
    // return
    const request = axios.get('/getAnswer');

    return (dispatch) => {
        request.then((response) => {
            debugger
            let score = 0;

            answers.forEach( (answerElement) => {
                response.data.answers.forEach(element => {
                    if ( element.name === answerElement.questionName && answerElement.selectedOption.value === element.answer) {
                        score++;
                    }
                });
            });
            
            dispatch({ type: 'GET_RESULTS', score: score })
        })
    }
}