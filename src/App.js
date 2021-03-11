import React from 'react';
import SignIn from '../src/pages/SignIn';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  
  return (
    <Provider store={store}>
      <SignIn/>
      <GlobalStyle/>
    </Provider>
  );


}

export default App;
