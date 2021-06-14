/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

const FormButton = ({ buttonTitle, disabled, ...rest }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: disabled ? '#ccc' : '#2e64e5',
                ...styles.buttonContainer,
            }}
            {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});
