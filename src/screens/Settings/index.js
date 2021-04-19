import React, { Component } from 'react';
import {Header} from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';

import {
    ButtonContainer,
    Container,
    ButtonText,
} from '../../StyledComponents';
import { AsyncStorage,Platform } from 'react-native';

class Settings extends Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    async handleLogout(){
        if(Platform.OS === 'web'){
            localStorage.removeItem('refreshtoken');
        }
        else{
            await AsyncStorage.removeItem('refreshtoken');
        }
        
    }
    render(){
        return(
            <>
            <Header
             barStyle="dark-content" // or directly
            centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: ['#4776E6', '#8E54E9'],
                start: { x: 1, y: 0 },
                end: { x: 0.3, y: 0 },
            }}
             containerStyle={{
                 justifyContent: 'space-around',
               }}
            />
            <Container>
              <ButtonContainer onPress={this.handleLogout}>
                  <ButtonText>
                      LOGOUT
                  </ButtonText>
              </ButtonContainer>
            </Container>
            </>
            
        )
    }
}
export default Settings;