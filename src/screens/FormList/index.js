import React, { Component } from 'react';
import { ListItem, Avatar,Header} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {LinearGradient} from 'expo-linear-gradient';
TouchableOpacity.defaultProps = { activeOpacity: 0.9 };
import { ScrollableContainer as Container} from '../../StyledComponents';
import {styles} from '../../Styles';

class FormList extends Component{
    render(){
        return(
        <>
        <Header
             barStyle="dark-content" // or directly
            centerComponent={{ text: 'FORMS', style: { color: '#fff' } }}
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
          <ListItem
                Component={TouchableScale}
                friction={95}
                tension={100}
                activeScale={0.90}
                linearGradientProps={{
                    colors: ['#4776E6', '#8E54E9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.3, y: 0 },
                }}
                ViewComponent={LinearGradient}
                key='bytext' 
                bottomDivider
                style={styles.listItem}
                onPress={() => this.props.route.props.navigate('Form')}
            >
                            <Avatar rounded
                                icon={
                                {
                                    name: 'comment',
                                    color: '#fff',
                                    size: 32,
                                }
                                }
                            />
                            <ListItem.Content>
                            <ListItem.Title style={styles.listItemText}>Contact Form 2021</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color='#fff' size={30} />
            </ListItem>
                <ListItem
                Component={TouchableScale}
                friction={95}
                tension={100}
                activeScale={0.90}
                linearGradientProps={{
                    colors: ['#4776E6', '#8E54E9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.3, y: 0 },
                }}
                ViewComponent={LinearGradient}
                key='secondform' 
                bottomDivider
                style={styles.listItem}
                >
                            <Avatar rounded
                                icon={
                                {
                                    name: 'comment',
                                    color: '#fff',
                                    size: 32,
                                }
                                }
                            />
                            <ListItem.Content>
                            <ListItem.Title style={styles.listItemText}>Survey Form 2021</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron color='#fff' size={30} />
                </ListItem>
        </Container>
        </>
        
        )
    }
}
export default FormList;