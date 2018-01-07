import React from 'react';
import { connect } from 'react-redux';
import Question from '../common/question';
import OptionList from '../common/optionList';
import { bindActionCreators } from 'redux';
import { getQuestions, updateAnswers, validateAnswer } from '../../actions/quizActions';

class QuestionList extends React.Component {

    constructor () {
        super();
        this.onSelect = this.onSelect.bind(this);
        this.validateAnswer = this.validateAnswer.bind(this);
    }

    componentDidMount() {
        //Dispatch an action ndaksnbajd
        this.props.actions.getQuestions();
    }

    onSelect( questionName, selectedOption ) {
        const selectedItem = {
            questionName,
            selectedOption
        };

        this.props.actions.updateAnswers(selectedItem);
    }

    validateAnswer() {
        this.props.actions.validateAnswer(this.props.answers);
    }

    render () {
        const { questions, showResults } = this.props;

        return (
            <div className='wrapper'>
                { showResults.results ?
                    <div>
                        <h1>Your score is: {showResults.score}</h1>
                    </div>
                    :
                    <div>
                        <h1>Welcome to quiz</h1>
                        <p>All answers are currently first option</p>
                        {questions.map(( eachQuestion ) => {
                            return (
                                <div key={eachQuestion.id}>
                                    <Question question={eachQuestion.question} />
                                    <OptionList name={eachQuestion.name} options={eachQuestion.options} onSelect={this.onSelect} />
                                </div>
                            )
                        })
                        }
                        <button type='button' onClick={this.validateAnswer}>Submit</button>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions.questions,
        answers: state.updateAnswers,
        showResults: state.validateAnswers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getQuestions: bindActionCreators(getQuestions, dispatch),
            updateAnswers: bindActionCreators(updateAnswers, dispatch),
            validateAnswer: bindActionCreators(validateAnswer, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);