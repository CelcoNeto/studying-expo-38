import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from './src/pages/home';
import Mission from './src/pages/mission';

const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerLeft: () => (
              <Image source={require('./assets/drawericon.png')} style={{}} />
            ),
            title: '',
            headerRight: () => (
              <Image
                source={require('./assets/user.png')}
                style={{ marginHorizontal: 20, marginTop: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Mission"
          component={Mission}
          options={{
            headerTransparent: true,
            headerLeft: () => (
              <Image
                source={require('./assets/blackmenu.png')}
                style={{ marginHorizontal: 20, marginTop: 40 }}
              />
            ),
            title: '',
            headerRight: () => (
              <Image
                source={require('./assets/user.png')}
                style={{ marginHorizontal: 35, marginTop: 45 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
