import React from 'react';
import Main from './src/screens/MainScreen';
import {Provider } from 'react-redux'
import { ConfigureStore } from './src/redux/Store'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = ConfigureStore();
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
