import {combineReducers} from "redux";

import { getQuestions } from './getQuestions';

import { updateAnswers } from './updateAnswers';

const rootReducer = combineReducers({
    questions: getQuestions,
    updateAnswers: updateAnswers
});

export default rootReducer;