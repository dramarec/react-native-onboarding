import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingSreen from '../screens/OnboardingSreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const App = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingSreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                // options={{ header: () => null }}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <FontAwesome.Button
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default App;
