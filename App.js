import React, {Component} from 'react';
import Initial from './screens/Initial';
import Login from './screens/Initial/Login';
import LoginOptions from './screens/Initial/LoginOptions';
import Register from './screens/Initial/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer initialRouteName="Initial">
          <Stack.Navigator>
            <Stack.Screen name="Initial" component={Initial} />
            <Stack.Screen name="LoginOptions" component={LoginOptions} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
