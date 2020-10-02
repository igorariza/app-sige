import React, { Component } from 'react';
// import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from './src/sections/components/loading';
import Applayout from './src/app'

const App = () => {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Applayout />
        </PersistGate>
      </Provider>
    );
}

export default App;