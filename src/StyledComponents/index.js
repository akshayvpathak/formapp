import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  margin-horizontal: 10px;
  elevation: 8;
  border-radius: 6px;
  padding-vertical: 14px;
  padding-horizontal: 30px;
  background-color: #7248b9;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  justify-content: center;
`;
export const FormWrapper = styled.View`
flex: 1;
background-color: #f0f0f0;
`;
export const ScrollableContainer = styled.ScrollView`
  flex: 1;
  background-color: #f0f0f0;
`;

export const FormFieldWrapper = styled.View`
  margin-bottom: 20px;
`;
export const HorizontalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: #6200ee;
  text-align:center;
  font-size: 32px;
  font-weight: bold;
`;
export const FormContainer = styled.View`
  margin-top: 10px;
  margin-vertical: 10px;
  margin-horizontal: 15px;
`;
export const SignUpContainer = styled.Text`
  color: #6200ee;
  font-size: 14px;
`;

export const FormTitle = styled.Text`
  margin-vertical: 30px;
  padding-vertical: 12px;
  padding-horizontal: 30px;
  background-color: #7248b9;
  align-items: center;
  justify-content: center;
  font-size:24px;
  color: #fff;
  text-align: center;
`;
export const QuestionContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  background-color: #fff;
  padding-horizontal: 5px;
  border-radius: 6px;
  elevation: 5;

`;
export const ScrollFormContainer = styled.ScrollView`
  margin-horizontal: 10px;
  margin-bottom: 70px;
  background-color: #f0f0f0;
`;
export const QuestionText = styled.Text`
  color: #000;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

export const RightDirectionContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  flex-direction: row;
`;
export const LeftDirectionContainer = styled.View`
  position: absolute;
  bottom: 0;
  left:  0;
  flex-direction: row;
`;