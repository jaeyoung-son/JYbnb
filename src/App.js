import React from 'react';
import Navigator from './Screens/Navigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigator />
    </>
  );
};

export default App;
