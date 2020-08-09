import 'react-native-gesture-handler';
import React from 'react';
import store from './app/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drinks from './pages/Drinks.js';
import Filters from './pages/Filters.js';

//redux provider and navigation

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drinks"
              component={Drinks}
              options={{title: null}}
            />

            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{title: null, headerLeft: null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
