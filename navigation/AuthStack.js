import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/RegScreen';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { API_WEB_ClINT } from '@env';

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
        GoogleSignin.configure({ webClientId: `${API_WEB_ClINT}` });
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
                component={OnboardingScreen}
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
                        // eslint-disable-next-line react-native/no-inline-styles
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
