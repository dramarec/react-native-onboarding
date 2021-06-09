import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>EditProfileScreen</Text>
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
    },
});
