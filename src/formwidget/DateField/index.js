import React,{Component} from 'react';
import {
    withTheme,
    TextInput
} from 'react-native-paper';
import {QuestionText,QuestionContainer} from '../../StyledComponents';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import {addAnswer} from '../../redux/ActionCreators/Answers';
import {Keyboard} from 'react-native';
const mapStateToProps = state => {
    return {
      Answers: state.Answers,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answer) => { dispatch(addAnswer(answer)) },
});
class DateField extends Component{
    constructor(props){
        super(props);
        let answerExist = false;
        if(this.props.Answers.answers.length)
        {
            this.props.Answers.answers.map((oldanswer) => {
                if(oldanswer.question.id == this.props.question.id ){
                    answerExist = true;
                    var dd = oldanswer.answer.getDate();
                    var mm = oldanswer.answer.getMonth()+1; 
                    var yyyy = oldanswer.answer.getFullYear();
                     this.state= {
                        answer: oldanswer.answer,
                        formatedDate:mm+'/'+dd+'/'+yyyy,
                        show: false,
                        isUpdatedByUser: true
                    }
                }
            })
        }
        if(!answerExist){
            this.state= {
                answer: new Date(),
                formatedDate : '',
                show: false,
                isUpdatedByUser: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.displayTimePicker = this.displayTimePicker.bind(this);
    }
    componentDidMount(){
        const myanswer = {
            question: this.props.question,
            answer: this.state.answer,
            errors: {
                answer: 'not selected date'
            }
        }
        if(!this.state.isUpdatedByUser)
        this.props.addAnswer(myanswer);
    }
    displayTimePicker(){
        Keyboard.dismiss();
        this.setState({
            show: !this.state.show
        })
    }
    handleChange(event,answer){
        this.setState({
            show: !this.state.show
        })
        if(answer){
            this.setState({
                answer
            })
            const myanswer = {
                question: this.props.question,
                answer: this.state.answer,
                errors: {
                    answer: ''
                }
            }
            this.props.addAnswer(myanswer);
            var dd = this.state.answer.getDate();
            var mm = this.state.answer.getMonth()+1; 
            var yyyy = this.state.answer.getFullYear();
            this.setState({
                formatedDate:mm+'/'+dd+'/'+yyyy
            });
        }
       
    }
   
    render(){
        const question = this.props.question;
        return(
            <QuestionContainer>
                <QuestionText>
                {question.question}

                </QuestionText>
                <TextInput
                  mode="flat"
                  dense
                  value={this.state.formatedDate}
                  disabled
                  underlineColor='black'
                  theme={{
                    colors: {
                                background: 'transparent'
                       }
                 }}
                 right={<TextInput.Icon name="calendar-month" color={this.props.theme.colors.primary} onPress={ this.displayTimePicker} />}

              />
                {
                this.state.show &&
                <DateTimePicker
                testID="dateTimePicker"
                value={this.state.answer}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={this.handleChange}
            />
            }
            </QuestionContainer>
        )
    } 
}



export default withTheme(connect(mapStateToProps, mapDispatchToProps)(DateField));
