import React from 'react';
import { connect } from 'react-redux';
import Question from '../common/question';
import OptionList from '../common/optionList';
import { bindActionCreators } from 'redux';
import { getQuestions, updateAnswers } from '../../actions/quizActions';

class QuestionList extends React.Component {

    constructor () {
        super();
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        //Dispatch an action
        this.props.actions.getQuestions();
    }

    onSelect( questionName, selectedOption ) {
        const selectedItem = {
            questionName,
            selectedOption
        };

        this.props.actions.updateAnswers(selectedItem);
    }

    render () {
        const { questions } = this.props;

        return (
            questions.map(( eachQuestion ) => {
                return (
                    <div key={eachQuestion.id}>
                        <Question question={eachQuestion.question} />
                        <OptionList name={eachQuestion.name} options={eachQuestion.options} onSelect={this.onSelect} />
                    </div>
                )
            })
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions.questions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getQuestions: bindActionCreators(getQuestions, dispatch),
            updateAnswers: bindActionCreators(updateAnswers, dispatch)
        }
    }
    // bindActionCreators({
    //     getQuestions: getQuestions
    // }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);