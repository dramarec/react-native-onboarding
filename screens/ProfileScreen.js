/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    Text,
    View,
    // Title,
    Alert,
    TextInput,
} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log('🔥🚀 ===> ProfileScreen ===> user', user);
    const [userData, setUserData] = useState(null);
    // console.log('🔥🚀 ===> ProfileScreen ===> userData', userData);

    const getUser = async () => {
        await firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(documentSnapshot => {
                // console.log('User exists: =>', documentSnapshot.exists);

                if (documentSnapshot.exists) {
                    // console.log('User data: =>', documentSnapshot.data());
                    setUserData(documentSnapshot.data());
                }
            });
    };

    const handleUpdate = async () => {
        firestore()
            .collection('users')
            .doc(user.uid)
            .update({
                fname: userData?.fname,
                lname: userData?.lname,
                // about: userData.about,
                // phone: userData.phone,
                // country: userData.country,
                // city: userData.city,
            })
            .then(() => {
                console.log('User Updated!');
                Alert.alert(
                    'Profile Updated!',
                    'Your profile has been updated successfully.',
                );
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}>
                {/* <Text>{userData?.fname}</Text> */}

                <Image
                    style={styles.userImg}
                    source={require('../assets/users/user-4.jpg')}
                />

                <View style={styles.action}>
                    <Ionicons name="person-outline" color="#333333" size={20} />
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#555"
                        autoCorrect={false}
                        value={userData ? userData?.fname : ''}
                        onChangeText={txt =>
                            setUserData({ ...userData, fname: txt })
                        }
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Ionicons name="person-outline" color="#333333" size={20} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#555"
                        autoCorrect={false}
                        value={userData ? userData.lname : ''}
                        onChangeText={txt =>
                            setUserData({ ...userData, lname: txt })
                        }
                        style={styles.textInput}
                    />
                </View>
            </ScrollView>
            <FormButton buttonTitle="Update" onPress={handleUpdate} />

            <View style={styles.container}>
                <Text style={styles.text}>{user?.email}</Text>
                <FormButton buttonTitle="Logout" onPress={() => logout()} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#333333',
    },
    text: {
        fontSize: 20,
        color: '#333333',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});
