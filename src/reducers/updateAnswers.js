export function updateAnswers (state = [], action) {
    switch ( action.type ) {
        case 'SELECTED_ANSWER':
            let isAvailable = false;
            state.forEach( (eachAnswer, index) => {
                if ( eachAnswer.questionName === action.answer.questionName ) {
                    eachAnswer = action.answer;
                    isAvailable = true;
                }
            });

            return ( isAvailable ) ? state : [...state, action.answer];
            break;
    }

    return state;
}