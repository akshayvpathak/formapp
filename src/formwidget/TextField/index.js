import React,{Component} from 'react';
import {
    QuestionContainer,
    QuestionText
} from '../../StyledComponents';
import { Keyboard } from 'react-native';
import {TextInput,HelperText} from 'react-native-paper';
import {addAnswer} from '../../redux/ActionCreators/Answers';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      Answers: state.Answers,
    };
};
  
  
const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answer) => { dispatch(addAnswer(answer)) },
});


class TextField extends Component{
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardWillShow() {
        //console.log('Keyboard Showning')
    }
    _keyboardDidHide() {
          console.log('Keyboard Hiding')
        if(this.state.answer != ''){
            const errors = {
                answer: '',
            }
            if(this.state.answer.length > this.props.question.max_character)
            {
                errors.answer = `Answer Should Not Contain More than ${this.props.question.max_character} character`;
            }
            if(this.state.answer.length < this.props.question.min_character)
            {
                errors.answer = `Answer Should Not Contain Less than ${this.props.question.min_character} character`;
            }
            
            const answer = {
                question: this.props.question,
                answer: this.state.answer,
                errors
            }
            this.props.addAnswer(answer);
        }
    }
    constructor(props){
        super(props);
        let answerExist = false;
        if(this.props.Answers.answers.length)
        {
            this.props.Answers.answers.map((oldanswer) => {
                if(oldanswer.question.id == this.props.question.id ){
                    answerExist = true;
                     this.state= {
                        answer: oldanswer.answer,
                        touched: {
                        answer: true,
                    }
                }
                }
            })
        }
        if(!answerExist){
            this.state= {
                answer:'',
                touched: {
                answer: false,
                }
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
    }


    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
        const errors = {
            answer: '',
        }
        if(this.state.answer.length > this.props.question.max_character)
        {
            errors.answer = `Answer Should Not Contain More than ${this.props.question.max_character} character`;
        }
        if(this.state.answer.length < this.props.question.min_character)
        {
            errors.answer = `Answer Should Not Contain Less than ${this.props.question.min_character} character`;
        }
        
        const answer = {
            question: this.props.question,
            answer: this.state.answer,
            errors
        }
        this.props.addAnswer(answer);
    }
    validate(answer){
        const errors = {
            answer: '',
        }
        if(this.state.touched.answer && answer.length > this.props.question.max_character)
        {
            errors.answer = `Answer Should Not Contain More than ${this.props.question.max_character} character`;
        }
        if(this.state.touched.answer && answer.length < this.props.question.min_character)
        {
            errors.answer = `Answer Should Not Contain Less than ${this.props.question.min_character} character`;
        }
        return errors;
    }


    handleChange = (answer) =>{
        this.setState({answer});
    }


    render(){
        const errors = this.validate(this.state.answer);
        const question = this.props.question;
        return(
            <QuestionContainer>
              <QuestionText>
              {question.question}
              </QuestionText>
              <TextInput
                  mode="flat"
                  error
                  dense
                  underlineColor='black'
                  theme={{
                    colors: {
                                background: 'transparent',
                       }
                 }}
                 blurOnSubmit={true}
                 value={this.state.answer} 
                 onBlur = {this.handleBlur('answer')}
                 onChangeText={(answer) => this.handleChange(answer)}
                 error = {errors.answer !== ''}
                 onSubmitEditing={this.handleBlur('answer')}
              />
              {
                   errors.answer != '' &&
                   <HelperText>
                       {errors.answer}
                    </HelperText>
              }
             
            </QuestionContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);