
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/index';
import Search from './screens/Search/index';
import Result from './screens/Result/index';


const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
}
  
function App() {
  return (
    <View style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={screenOptions} />                      
            <Stack.Screen name="Search" component={Search} options={screenOptions} />                      
            <Stack.Screen name="Result" component={Result} options={screenOptions} />                      
         
        </Stack.Navigator>       
    </View>
  );
}

export default () => {
    return (
        <NavigationContainer>
          <App />
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
