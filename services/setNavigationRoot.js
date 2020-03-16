import {Navigation} from 'react-native-navigation';
import {MAIN, INITIAL} from '../actions/screenDefinitions';
import {store, persistor} from '../store';

export default async auth => {
  console.log('store en set', store.getState());
  console.log('persistor en set', persistor.getState());
  let rootConfig = {};
  if (auth) {
    rootConfig = {
      stack: {
        children: [
          {
            component: {
              name: MAIN,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    };
  } else {
    rootConfig = {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: INITIAL,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    };
  }
  Navigation.setRoot({root: rootConfig});
};
