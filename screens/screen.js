import {Navigation} from 'react-native-navigation';
import Login from './Initial/Login';
import Register from './Initial/Register';
import Initial from './Initial';
import Main from './Main';
import SideMenu from '../components/moleculas/SideMenu';
import PlaceInfoDetail from './Main/PlaceInfoDetail';
import {
  INITIAL,
  REGISTER,
  LOGIN,
  MAIN,
  SIDEMENU,
  PLACE_INFO_DETAIL,
} from '../actions/screenDefinitions';

import {Provider} from 'react-redux';
import {store} from '../store';

export default () => {
  Navigation.registerComponentWithRedux(
    INITIAL,
    () => Initial,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(LOGIN, () => Login, Provider, store);
  Navigation.registerComponentWithRedux(
    REGISTER,
    () => Register,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(MAIN, () => Main, Provider, store);
  Navigation.registerComponentWithRedux(
    SIDEMENU,
    () => SideMenu,
    Provider,
    store,
  );
  Navigation.registerComponent(PLACE_INFO_DETAIL, () => PlaceInfoDetail);
};
