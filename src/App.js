import React from 'react';
import 'react-native-gesture-handler';

import Router from './router';
import {AuthProvider} from './router/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
