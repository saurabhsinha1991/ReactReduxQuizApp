export function getQuestions (state = {
    questions: []
}, action) {
    switch ( action.type ) {
        case 'GET_QUESTIONS':
            return {...state, questions: action.payload }
            break;
    }

    return state;
}