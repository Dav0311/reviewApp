import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTintColor: '#444',
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
}
