import axios from 'axios';

export function getQuestions(questions) {
    const request = axios.get('/getQuestion');

    return (dispatch) => {
        request.then((response) => {
            dispatch({ type: 'GET_QUESTIONS', payload: response.data.questions })
        })
    }
}