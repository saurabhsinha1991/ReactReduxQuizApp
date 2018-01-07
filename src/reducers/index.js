import {combineReducers} from "redux";

import { getQuestions } from './getQuestions';

import { updateAnswers } from './updateAnswers';

import { validateAnswers } from './validateAnswer';

const rootReducer = combineReducers({
    questions: getQuestions,
    updateAnswers: updateAnswers,
    validateAnswers: validateAnswers
});

export default rootReducer;