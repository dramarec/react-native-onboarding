import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator();

import OnboardingSreen from './screens/OnboardingSreen';
import LoginScreen from './screens/LoginScreen';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        return (
            <NavigationContainer>
                <AppStack.Navigator headerMode="none">
                    <AppStack.Screen
                        name="Onboarding"
                        component={OnboardingSreen}
                    />
                    <AppStack.Screen name="Login" component={LoginScreen} />
                </AppStack.Navigator>
            </NavigationContainer>
        );
    } else {
        return <LoginScreen />;
    }
};

export default App;
