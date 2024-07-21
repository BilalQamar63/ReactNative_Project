import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStart from '../Screens/GetStart';
import Intro from '../Screens/Intro';
import Intro2 from '../Screens/Intro2';
import Intro3 from '../Screens/Intro3';
import Screen02 from '../Screens/Screen02';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import WorkSpace from '../Screens/WorkSpace';

const Stack_Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='GetStart'
    
    // screenOptions={
    //   {statusBarColor:'#f4511e',
      
    //     headerStyle:{
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor:'#fff',
    //     headerTitleAlign: 'center',}
    // }
    >
      <Stack.Screen name="GetStart" component={GetStart} options={{}} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Intro2" component={Intro2} />
      <Stack.Screen name="Intro3" component={Intro3} />
      <Stack.Screen name="Screen02" component={Screen02} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="WorkSpace" component={WorkSpace} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Stack_Navigate;
