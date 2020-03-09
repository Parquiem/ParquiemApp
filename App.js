import React, {Component} from 'react';
import Initial from './screens/Initial';
import Login from './screens/Initial/Login';
import Register from './screens/Initial/Register';

// const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <>
        <Initial />
      </>
    );
  }
}

export default App;
