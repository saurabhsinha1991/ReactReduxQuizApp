export function validateAnswers (state = {
    results: false,
    score: 0
}, action) {
    switch ( action.type ) {
        case 'GET_RESULTS':
            const showResults = Object.assign({}, state, { results: true, score: action.score})
            return showResults;
            break;
    }

    return state;
}