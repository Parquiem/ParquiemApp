import {Navigation} from 'react-native-navigation';
import registerComponents from './screens/screen';
import setNavigationRoot from './services/setNavigationRoot';
import {store, persistor} from './store';

registerComponents();

const onRegisterAppLaunchedListener = () => {
  console.log('store', store.getState());
  console.log('persistor', persistor.getState());
  setNavigationRoot(store.getState().auth.isAuthenticated);
};
Navigation.events().registerAppLaunchedListener(onRegisterAppLaunchedListener);
