import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'




const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function postsPages(){
    return(
        <Stack.Navigator headerMode="none" initialRouteName="Posts">
            <Stack.Screen name="Posts" component={Posts}/>

            <Stack.Screen name="NewPost" component={NewPost} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    gestureEnabled: true
                }}/>

        </Stack.Navigator>
    );
}




function appHome(){
    return(
        <Tab.Navigator initialRouteName="Home" barStyle={{backgroundColor: '#000000'}}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                    )
                }}
            />

            <Tab.Screen name="Posts" component={postsPages}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="post" color={color} size={26}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}



export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none" screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                animationTypeForReplace: 'push',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen name="Login" component={Login}/>

                <Stack.Screen name="Register" component={Register}/>

                <Stack.Screen name="Home" component={appHome} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    gestureEnabled: false
                }}/>            
            </Stack.Navigator>
        </NavigationContainer>
    )
}