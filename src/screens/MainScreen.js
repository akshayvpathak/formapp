import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Form from './Form';
import { AsyncStorage,Platform } from 'react-native';


const Stack = createStackNavigator();

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
        this.getToken = this.getToken.bind(this);
    }
    async getToken(){
        try{
            if(Platform.OS === 'web'){
                return localStorage.getItem('refreshtoken');

            }
            else{
                const value =  await AsyncStorage.getItem('refreshtoken');
                return value;
            }
           
        }
        catch(err){
            console.log(err);
        }
    }
    async componentDidMount(){
        if(await this.getToken()){
            this.setState(
                {
                    isAuthenticated: true
                }
            );
        }
    }
    render(){
       return(
        <NavigationContainer>
        <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            />
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="Form"
            component={Form}
            />
           </Stack.Navigator>                
        </NavigationContainer>
       )
        
    }
}

export default Main;