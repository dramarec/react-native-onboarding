import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
    const { user } = useContext(AuthContext);

    console.log('🔥🚀 ===> HomeScreen ===> user', user);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user?.email}</Text>
            <Text style={styles.text}>Welcome {user?.displayName}</Text>
        </View>
    );
};

export default HomeScreen;

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
