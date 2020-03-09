import {Navigation} from 'react-native-navigation';
import Login from './screens/Initial/Login';
import Register from './screens/Initial/Register';
import Initial from './screens/Initial';

Navigation.registerComponent('initial', () => Initial);
Navigation.registerComponent('login', () => Login);
Navigation.registerComponent('register', () => Register);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'initial',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
