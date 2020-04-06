import {Navigation} from 'react-native-navigation';
import registerComponents from './screens/screen';
import setNavigationRoot from './services/setNavigationRoot';
import {store} from './store';

registerComponents();

const onRegisterAppLaunchedListener = () => {
  setNavigationRoot(store.getState().auth.isAuthenticated);
};
Navigation.events().registerAppLaunchedListener(onRegisterAppLaunchedListener);
