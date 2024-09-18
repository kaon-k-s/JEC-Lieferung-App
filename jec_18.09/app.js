import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import ItemListPage from './itemlistpage';
import Warenkorb from './warenkorb';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Categories' }} />
        <Stack.Screen name="ItemListPage" component={ItemListPage} options={{ title: 'Item List' }} />
        <Stack.Screen name="Warenkorb" component={Warenkorb} options={{ title: 'Warenkorb' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
