import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './component/screen/Home';
import Search from './component/screen/Search';
import Month from './component/screen/Month';
import Geolocation from './component/screen/Geolocation';
import Result from './component/screen/Result';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Veggie Start Tool',
            headerTitleStyle: { fontWeight: 'bold', color: '#808000' },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'Veggie Start Tool', headerTitleStyle: { fontWeight: 'bold', color: '#808000' } }}
        />
        <Stack.Screen
          name="Month"
          component={Month}
          options={{
            title: 'Veggie Start Tool',
            headerTitleStyle: { fontWeight: 'bold', color: '#808000' },
          }}
        />
        <Stack.Screen
          name="Geolocation"
          component={Geolocation}
          options={{
            title: 'Veggie Start Tool',
            headerTitleStyle: { fontWeight: 'bold', color: '#808000' },
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: 'Veggie Start Tool',
            headerTitleStyle: { fontWeight: 'bold', color: '#808000' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
