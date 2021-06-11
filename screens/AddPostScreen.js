// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';

const AddPostScreen = () => {
    // const [image, setImage] = useState(null);

    // const takePhotoFromCamera = () => { };
    // const choosePhotoFromLibrary = () => { };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AddPostScreen</Text>
            <Button
                title="Click here"
                // eslint-disable-next-line no-alert
                onPress={() => alert('Button Clicked!')}
            />
            {/* <ActionButton buttonColor="#2e64e5">
                <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="Take Photo"
                    onPress={takePhotoFromCamera}>
                    <Icon name="camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#3498db"
                    title="Choose Photo"
                    onPress={choosePhotoFromLibrary}>
                    <Icon name="md-images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton> */}
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
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
