import axios from 'axios';

export function getQuestions(questions) {
    const request = axios.get('/getQuestion');

    return (dispatch) => {
        request.then((response) => {
            dispatch({ type: 'GET_QUESTIONS', payload: response.data.questions })
        })
    }
}

export function updateAnswers(answer) {
    debugger
    return {
        type: 'SELECTED_ANSWER',
        answer: answer
    }
}