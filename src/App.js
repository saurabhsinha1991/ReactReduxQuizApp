import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import { getQuestions } from './actions/quizActions';

import QuestionList from './components/pages/questionList';

//Store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

render(
    <Provider store={store}>
        <QuestionList />
    </Provider>,
    document.getElementById('app')
)
