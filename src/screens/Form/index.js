import React,{Component} from 'react';
import AnimatedFormView from 'react-native-multistep-forms'
import {View,StyleSheet} from 'react-native';
import {
  withTheme
} from 'react-native-paper';

import RenderForm from '../RenderForm';
import {setPageNumber} from '../../redux/ActionCreators/CurrentPage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    CurrentPage: state.CurrentPage,
  };
};


const mapDispatchToProps = (dispatch) => ({
  setPageNumber: (page) => { dispatch(setPageNumber(page)) },
});
const MyForm = 
   [
       {
        'id': 1,
        'question': 'question 1?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 2,
        'question': 'Agree on Terms and Conditions',
        'type': 'checkbox',
       },
       {
        'id': 3,
        'question': 'What is Your Birthdate?',
        'type': 'date',
       },
       {
        'id': 4,
        'question': 'question 4?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 5,
        'question': 'question 5?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 6,
        'question': 'question 6?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 7,
        'question': 'question 7?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 8,
        'question': 'question 8?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },
       {
        'id': 9,
        'question': 'question 9?',
        'type': 'text',
        'min_character': 3,
        'max_character': 5,
       },

];




/* Define your class */
 class Form extends Component {

/* define the method to be called when you go on next step */

  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

/* define the method to be called when the wizard is finished */

  finish = finalState => {
    console.log(finalState);
  };
  componentDidMount(){
    this.props.setPageNumber(MyForm.length/3);
  }

/* render MultiStep */
  render() {
    const AllInOneStep = [];
    var TotalPage = MyForm.length/3;
    
    for(var i =1;i<=TotalPage;i++){
        AllInOneStep.push(
            { name: `step ${i}`, component: (props)=>
                    <RenderForm form={MyForm}  totalpage={TotalPage} back={props.back} next={props.next} saveState={props.saveState} getState={props.getState}/>
            }   
        );
    }
    return (
      <View style={styles.container}>
        <AnimatedFormView
          steps={AllInOneStep}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext=''
          OutOnNext=''
          comeInOnBack=''
          OutOnBack=''
        />
      </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    formfield:{
        marginHorizontal: 10,
        marginVertical: 10
    },
    loading:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 99999,
    }
})

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Form));