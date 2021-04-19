import React,{Component} from 'react';
import {
    FormWrapper,
    FormTitle,
    ScrollFormContainer,
    RightDirectionContainer,
    LeftDirectionContainer,
    ButtonContainer,
    ButtonText
} from '../../StyledComponents';
import { Keyboard } from 'react-native';
import TextField from '../../formwidget/TextField';
import CheckboxField from '../../formwidget/CheckboxField';
import DateField from '../../formwidget/DateField';
import {incrementPageNumber, decrementPageNumber} from '../../redux/ActionCreators/CurrentPage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      CurrentPage: state.CurrentPage,
      Answers: state.Answers
    };
  };
  
  
  const mapDispatchToProps = (dispatch) => ({
    incrementPageNumber: () => { dispatch(incrementPageNumber()) },
    decrementPageNumber: () => { dispatch(decrementPageNumber()) },
  });
const HandleQuestions = (props) =>{
    const {question} = props;
    if(question.type == 'text')
     return(HandleTextQuestion(question));
    if(question.type == 'checkbox')
     return(HandleCheckboxQuestion(question));
    if(question.type == 'date')
     return(HandleDateQuestion(question));
}

const HandleTextQuestion = (question) => {
     return(
          <TextField question={question} />
     )
}

const HandleCheckboxQuestion = (question) =>{
    return(
        <CheckboxField question={question} />
    )
}

const HandleDateQuestion = (question) =>{
    return(
        <DateField question={question} />
    )
}
class RenderForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isKeyboardOpen: false
        }
        this.nextStep = this.nextStep.bind(this);
        this.goBack = this.goBack.bind(this);
        this.Form = this.Form.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
    }
   
     nextStep = async () => {
        await Keyboard.dismiss();
        const questions = this.Form();
        var questionsid = [];
        questions.map((question)=>{
            questionsid.push(question.id);
        });
        if(this.props.Answers.answers.length){
            var error = [];
            var counter = 0;
            this.props.Answers.answers.map((answer)=>{
                if(questionsid.includes(answer.question.id)){
                    counter++;
                    if(answer.errors.answer == ''){
                      error.push(false);
                    }
                    else{
                        error.push(true);
                    }
                }
            })
            if(error.length && counter == questionsid.length && !error.includes(true)){
                const { next } = this.props;
                this.props.incrementPageNumber();
                next();
            }
        }
      };
    
      goBack() {
        const { back } = this.props;
        this.props.decrementPageNumber();
        back();
      }

      Form(){
        const totalpage = this.props.CurrentPage.totalpage;
        const totalquestion = this.props.form.length;
        const currentpage = this.props.CurrentPage.currentpage;
        if(totalpage != currentpage)
        {
          const questions = this.props.form.slice(currentpage*3-3,currentpage*3);
          return questions;
        }
        else{
          const questions = this.props.form.slice(currentpage*3-3,totalquestion);
          return questions;
        }
       
      }
      componentDidMount() {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        }

        componentWillUnmount() {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }

        _keyboardDidShow() {
            this.setState({
                isKeyboardOpen: true
            })
    }
    _keyboardDidHide() {
        this.setState({
            isKeyboardOpen: false
        })
    }
    
    render(){
      const questions = this.Form();
      console.log(questions);
        return(
            <FormWrapper>
               <FormTitle>
                    CONTACT FORM 2021
                </FormTitle>
            <ScrollFormContainer >
            {
                    questions.map((question)=>{
                        return(
                            <HandleQuestions question={question} key={question.id} />
                        )
                    })
            }
            </ScrollFormContainer>
            {
                 this.props.CurrentPage.currentpage != 1 && 
                 <LeftDirectionContainer >
                    <ButtonContainer onPress={this.goBack} >
                        <ButtonText>Prev</ButtonText>
                    </ButtonContainer>
                </LeftDirectionContainer>
            }
             {
                  this.props.CurrentPage.currentpage != this.props.CurrentPage.totalpage && !this.state.isKeyboardOpen &&
                    <RightDirectionContainer >
                    <ButtonContainer onPress={this.nextStep} >
                        <ButtonText>Next</ButtonText>
                    </ButtonContainer>
                    </RightDirectionContainer>
            }
            {
                  this.props.CurrentPage.currentpage == this.props.CurrentPage.totalpage &&
                    <RightDirectionContainer >
                    <ButtonContainer >
                        <ButtonText>SUBMIT</ButtonText>
                    </ButtonContainer>
                    </RightDirectionContainer>
            }
            </FormWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderForm);