import React from 'react';
import { connect } from 'react-redux';
import Question from '../common/question';
import OptionList from '../common/optionList';
import { bindActionCreators } from 'redux';
import { getQuestions } from '../../actions/quizActions';

class QuestionList extends React.Component {

    componentDidMount() {
        //Dispatch an action
        this.props.getQuestions();
    }

    onSelect( selectedOption ) {
        debugger
    }

    render () {
        const { questions } = this.props;
debugger
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
    return bindActionCreators({ 
        getQuestions: getQuestions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);