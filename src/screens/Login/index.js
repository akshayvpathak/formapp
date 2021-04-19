import React, { Component } from 'react';
import {TextInput,withTheme,HelperText} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
TouchableOpacity.defaultProps = { activeOpacity: 0.9 };


import {
    Container,
    Title,
    FormContainer,
    FormFieldWrapper,
    ButtonContainer,
    ButtonText,
    HorizontalContainer,
    SignUpContainer
} from '../../StyledComponents';
import {loginUser} from '../../redux/ActionCreators/LoginUser';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';


const mapStateToProps = state => {
    return {
      User: state.LoginUser,
    };
};
  
  
const mapDispatchToProps = (dispatch) => ({
    loginUser: (user,history) => { dispatch(loginUser(user,history)) },
});


class Login extends Component{
    constructor(props){
      super(props);
      this.state= {
        email: '',
        password: '',
        touched: {
          email: false,
          password: false
        }
      }
      this.validate = this.validate.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
    }

    
    validate(email,password){
      const errors = {
          email: '',
          password: '',
      }
      if(this.state.touched.email && email.split('').filter(x => x=== '@').length !== 1)
      {
          errors.email = 'Email Should Contain @ Symbol';
      }
      if(this.state.touched.password && password.length < 1){
        errors.password = 'Password Can\'t be Empty!';
      }
      return errors;
    }

    handleLogin(event){
      event.preventDefault();
      const errors = this.validate(this.state.email,this.state.password);
      if(errors.password == '' && errors.email == ''){
        this.props.loginUser({email_id: this.state.email, password: this.state.password},this.props.navigation)
      }
    }


    handleBlur = (field) => (evt) => {
      this.setState({
          touched: { ...this.state.touched, [field]: true}
      });
    }
    
    render(){
      const errors = this.validate(this.state.email,this.state.password);
        return(
            <Container>
            <Title>
              LOGIN
            </Title>
            <FormContainer>
                <FormFieldWrapper>
                <TextInput
                          label="Email" 
                          mode="flat"
                          dense
                          underlineColor={this.props.theme.colors.primary}
                          value={this.state.email} 
                          onBlur = {this.handleBlur('email')}
                          onChangeText={(email) => this.setState({email})}
                          theme={{
                            colors: {
                                        background: 'transparent'
                              }
                          }}
                          error = {errors.email !== ''}
                          left={<TextInput.Icon name="account" size={20} color={this.props.theme.colors.primary} />}
              />
              {
                errors.email !== '' && 
                <HelperText type="error" visible={errors.email !== ''}>
                {errors.email} 
                </HelperText>
              }
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <TextInput
                            label="Password" 
                            mode="flat"
                            dense
                            underlineColor={this.props.theme.colors.primary}
                            value={this.state.password} 
                            onBlur = {this.handleBlur('password')}     
                            onChangeText={(password) => this.setState({password})}
                            error = {errors.password !== ''}
                            theme={{
                              colors: {
                                          background: 'transparent'
                                }
                            }}
                            secureTextEntry={true}
                            left={<TextInput.Icon name="lock" size={20} color={this.props.theme.colors.primary} />}
                  />
                  {
                errors.password !== '' && 
                <HelperText type="error" visible={errors.password !== ''}>
                {errors.password} 
                </HelperText>
              }
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <ButtonContainer onPress={this.handleLogin}>
                    <ButtonText>
                      LOGIN
                    </ButtonText>
                  </ButtonContainer>
                </FormFieldWrapper>
                <HorizontalContainer>
                  <FormFieldWrapper>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                      <SignUpContainer>
                        Don't have an account? signup
                      </SignUpContainer>
                    </TouchableOpacity>
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <TouchableOpacity>
                      <SignUpContainer>
                        Forgot Password?
                      </SignUpContainer>
                    </TouchableOpacity>
                  </FormFieldWrapper>
                </HorizontalContainer>
                
            </FormContainer>
            
            
          </Container>
        )
    }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Login));