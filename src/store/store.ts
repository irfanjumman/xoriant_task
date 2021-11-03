import {createContext, useContext} from 'react';
// import {IDispatchGetState} from '../shared/Interfaces/Interfaces';

let createStore = (name = 'mainStore') => {
  return (() => {
    const subscriptions: Array<Function> = [];
    const store = {
      isReady: false,
      name,
      // methods will be updated by init
      dispatch: () => {
        console.error(
          `dispatch is not ready yet. Only call after it has been init'd first`,
        );
      },
      getState: () => null,
      subscribe: (callback: Function) => {
        subscriptions.push(callback);
      },
      onStateUpdated: () => {
        subscriptions.forEach((fn: Function) => fn());
      },
      init: function ({dispatch, getState}:any) {
        if (this.isReady) return;
        this.dispatch = dispatch;
        this.getState = getState;
        this.isReady = true;
        Object.freeze(this);
      },
    };
    return store;
  })();
};

export const store = <any>createStore();

export const StateContext = createContext({});
export const DispatchContext = createContext({});

export const useStore = () => ({
  state: <any>useContext(StateContext),
  dispatch: <Function>useContext(DispatchContext),
});
