import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from 'react-native-navigation';
import setNavigationRoot from './services/setNavigationRoot';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Navigation.setRoot(
            setNavigationRoot(store.getState().auth.isAuthenticated),
          )}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
