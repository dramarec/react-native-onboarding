import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AddPostScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AddPostScreen</Text>
            <Button
                title="Click here"
                // eslint-disable-next-line no-alert
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default AddPostScreen;

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
