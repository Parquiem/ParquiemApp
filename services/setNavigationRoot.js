import {Navigation} from 'react-native-navigation';
import {MAIN, INITIAL} from '../actions/screenDefinitions';

export default async auth => {
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
