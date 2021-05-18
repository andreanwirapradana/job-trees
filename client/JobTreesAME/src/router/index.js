import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import storage from '../helpers/storage';
// Screens
import {
    Login,
    Register,
    Home
} from '../screens';

const Stack = createStackNavigator();


export default function Router() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = () => {
        storage.load({
            key: 'accessToken'
        })
        .then((data) => {
            console.log(data)
            setIsLogin(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <NavigationContainer>
            {
                !isLogin ?
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
                :
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )

}