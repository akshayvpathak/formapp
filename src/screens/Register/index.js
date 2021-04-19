import React, { Component } from 'react';
import {TextInput,withTheme} from 'react-native-paper';
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
class Register extends Component{
    render(){
        return(
            <Container>
          <Title>
            REGISTER
          </Title>
          <FormContainer>
          <FormFieldWrapper>
              <TextInput
                        label="First name" 
                        mode="flat"
                        dense
                        underlineColor={this.props.theme.colors.primary}
                        theme={{
                          colors: {
                                      background: 'transparent'
                            }
                        }}
                        left={<TextInput.Icon name="account" size={20} color={this.props.theme.colors.primary} />}
            />
              </FormFieldWrapper>
              <FormFieldWrapper>
              <TextInput
                        label="Last name" 
                        mode="flat"
                        dense
                        underlineColor={this.props.theme.colors.primary}
                        theme={{
                          colors: {
                                      background: 'transparent'
                            }
                        }}
                        left={<TextInput.Icon name="account" size={20} color={this.props.theme.colors.primary} />}
            />
              </FormFieldWrapper>
              <FormFieldWrapper>
              <TextInput
                        label="Email" 
                        mode="flat"
                        dense
                        underlineColor={this.props.theme.colors.primary}
                        theme={{
                          colors: {
                                      background: 'transparent'
                            }
                        }}
                        left={<TextInput.Icon name="at" size={20} color={this.props.theme.colors.primary} />}
            />
              </FormFieldWrapper>
              <FormFieldWrapper>
              <TextInput
                        label="Mobile Number" 
                        keyboardType= 'numeric'
                        mode="flat"
                        dense
                        underlineColor={this.props.theme.colors.primary}
                        theme={{
                          colors: {
                                      background: 'transparent'
                            }
                        }}
                        left={<TextInput.Icon name="cellphone" size={20} color={this.props.theme.colors.primary} />}
            />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <TextInput
                          label="Password" 
                          mode="flat"
                          dense
                          underlineColor={this.props.theme.colors.primary}
                          theme={{
                            colors: {
                                        background: 'transparent'
                              }
                          }}
                          secureTextEntry={true}
                          left={<TextInput.Icon name="lock" size={20} color={this.props.theme.colors.primary} />}
              />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <ButtonContainer>
                  <ButtonText>
                    REGISTER
                  </ButtonText>
                </ButtonContainer>
              </FormFieldWrapper>
              <HorizontalContainer>
                <FormFieldWrapper>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <SignUpContainer>
                      Already have an account? login
                    </SignUpContainer>
                  </TouchableOpacity>
                </FormFieldWrapper>
              </HorizontalContainer>
          </FormContainer>
        </Container>
        )
    }
}

export default withTheme(Register);