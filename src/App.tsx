import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers,connect} from 'redux';

const store = createStore(rootReducer,initiallState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
