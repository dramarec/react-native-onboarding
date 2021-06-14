/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const FormInput = ({
    iconType,
    labelValue,
    placeholderText,
    secureTextEntry,
    name,
    ...rest
}) => {
    const [data, setData] = useState({ secureTextEntry: true });

    const updateSecureTextEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry });
    };

    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#2e64e5" />
            </View>
            <TextInput
                style={styles.input}
                value={labelValue}
                placeholder={placeholderText}
                numberOfLines={1}
                placeholderTextColor="#555"
                secureTextEntry={data.secureTextEntry ? true : false}
                {...rest}
            />
            {name === 'password' && (
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? (
                        <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                        <Feather name="eye" color="grey" size={20} />
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});
