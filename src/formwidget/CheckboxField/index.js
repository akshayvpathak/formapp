import React,{Component} from 'react';
import { CheckBox } from 'react-native-elements';
import {styles} from '../../Styles';
import {QuestionContainer} from '../../StyledComponents';
import { connect } from 'react-redux';
import {addAnswer} from '../../redux/ActionCreators/Answers';

const mapStateToProps = state => {
    return {
      Answers: state.Answers,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answer) => { dispatch(addAnswer(answer)) },
});
class CheckboxField extends Component{
    constructor(props){
        super(props);
        this.state= {
            answer: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        const myanswer = {
            question: this.props.question,
            answer: this.state.answer,
            errors: {
                answer: ''
            }
        }
        this.props.addAnswer(myanswer);
    }
    handleChange(){
            this.setState({
                answer: !this.state.answer
            })
            const myanswer = {
                question: this.props.question,
                answer: this.state.answer,
                errors: {
                    answer: ''
                }
            }
            this.props.addAnswer(myanswer);
    }
    render(){
        const question = this.props.question;
        return(
           <QuestionContainer>
            <CheckBox
              title={question.question}
              checked={this.state.answer}
              onPress={this.handleChange}
              textStyle={styles.checkboxtitle}
              containerStyle={styles.checkboxContainer}
              uncheckedColor='black'
          />     
           </QuestionContainer>  
        )
    } 
}



export default connect(mapStateToProps, mapDispatchToProps)(CheckboxField);
