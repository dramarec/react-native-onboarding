/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import { SIZES, FONTS } from '../constants';
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="user" size={25} color="#ccc" />
            <Text style={styles.input}>Login Screen</Text>
            <Button title="Click Here" onPress={() => alert('Welcome')} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 36,
        // fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-LightItalic',
        color: '#333',
    },
});
