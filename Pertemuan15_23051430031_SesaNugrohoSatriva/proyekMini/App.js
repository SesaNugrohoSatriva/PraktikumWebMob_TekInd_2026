import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [items, setItems] = useState([
    {
      id: '1',
      nama: 'Produk A',
      status: 'Belum Dicek'
    },
    {
      id: '2',
      nama: 'Produk B',
      status: 'Belum Dicek'
    },
    {
      id: '3',
      nama: 'Produk C',
      status: 'Belum Dicek'
    }
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => (
            <DetailScreen
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}