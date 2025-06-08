import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator();

export default function CountriesStackScreen({ navigation, route, countries, addCountry, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries
            {...props}
            countries={countries}
            addCountry={addCountry}
            addCurrency={addCurrency}
          />
        )}
      />
      <Stack.Screen
        name="Country"
        children={(props) => (
          <Country
            {...props}
            countries={countries}
            addCountry={addCountry}
            addCurrency={addCurrency}
            country={props.route.params.country}
          />
        )}
      />
    </Stack.Navigator>
  );
}
