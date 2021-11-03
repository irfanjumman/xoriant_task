import './App.css';
import UsersList from './UsersList'
import React, {useReducer} from 'react';
import {StateContext, DispatchContext} from './store/store';
import {initialState} from './store/initialState';
import {reducers} from './store/reducer';
function App() {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
    <div className="App">
      <UsersList />
    </div>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
