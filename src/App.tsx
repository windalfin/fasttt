import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import { PaperProvider } from 'react-native-paper';
import { AuthProvider } from './contexts/Auth/AuthContexts';
import { Amplify } from "aws-amplify";

import config from './aws-exports';

Amplify.configure(config);


const App = () => (
  <AuthProvider>
    <Provider store={store}>
      <PaperProvider>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </PaperProvider>
    </Provider>
  </AuthProvider>
);

export default App;
