/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import type {StatusBarStyle} from 'react-native';

/**
 * ? Local Imports
 */

import AppNavigator from './src/Navigator/AppNavigator/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/Stores/Stores/Stores';

const STYLES = ['default', 'dark-content','light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);
  
  return (
    <>
    <StatusBar  
        animated={true}
        backgroundColor="#EBEAEA"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
    />

      <AppNavigator/> 

    </> 
  );
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
   flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


