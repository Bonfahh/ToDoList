import React from 'react';
import {StatusBar} from 'react-native';

import Home from '@pages/Home';
import {TodoProvider} from './contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Home />
    </TodoProvider>
  );
};

export default App;
