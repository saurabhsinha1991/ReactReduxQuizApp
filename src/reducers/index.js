import {combineReducers} from "redux";

import { getQuestions } from './getQuestions';

const rootReducer = combineReducers({
    questions: getQuestions
});

export default rootReducer;