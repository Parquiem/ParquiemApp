import {Navigation} from 'react-native-navigation';
import registerComponents from './screens/screen';
import setNavigationRoot from './services/setNavigationRoot';
import {store, persistor} from './store';

registerComponents();

const onRegisterAppLaunchedListener = () => {
  console.log('store', store.getState());
  persistor.subscribe(() => {
    store.getState().auth.isAuthenticated
      ? setNavigationRoot(true)
      : setNavigationRoot(false);
  });
};
Navigation.events().registerAppLaunchedListener(onRegisterAppLaunchedListener);
