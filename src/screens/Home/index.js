import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import FormList from '../FormList';
import Settings from '../Settings';

const Home = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'formlist', title: 'FORMS', icon: 'comment-text-multiple',props: props.navigation },
    { key: 'settings', title: 'SETTINGS', icon: 'account-cog',props: props.navigation },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    formlist: FormList,
    settings: Settings,
  });
  React.useEffect(()=>{
    props.navigation.addListener('beforeRemove',(e)=> {
        console.log('called');
        e.preventDefault();
    });
  });
  
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;