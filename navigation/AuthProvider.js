/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//https://reactjs.org/docs/context.html
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register: async (values, actions) => {
                    const { email, password } = values;
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                            .then(() => {
                                firestore()
                                    .collection('users')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        email: email,
                                        fname: '',
                                        lname: '',
                                        userImg: null,
                                        createdAt: firestore.Timestamp.fromDate(new Date()),
                                    })
                                    .catch(err => {
                                        console.log(
                                            'Something went wrong with added user to firestore: ',
                                            err,
                                        );
                                    });
                            });
                    } catch (err) {
                        console.log('🔥🚀 ===> login: ===> err', err);
                        actions.setFieldError('general', err.message.slice(28));
                    } finally {
                        actions.setSubmitting(false);
                    }
                },
                login: async (values, actions) => {
                    const { email, password } = values;
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (err) {
                        console.log('🔥🚀 ===> login: ===> err', err.message.slice(22));
                        actions.setFieldError('general', err.message.slice(22));
                    } finally {
                        actions.setSubmitting(false);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (err) {
                        console.log('🔥🚀 ===> logout: ===> err', err);
                    }

                },
                googleLogin: async () => {
                    try {
                        // Get the users ID token
                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential =
                            auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);
                    } catch (err) {
                        console.log('🔥🚀 ===> googleLogin: ===> err', err);
                    }
                },
                // firestore
                createNewUser: async userData => {
                    try {
                        await firestore()
                            .collection('users')
                            .doc(`${userData.uid}`)
                            .set(userData);

                    } catch (err) {
                        console.log('🔥🚀 ===> AuthProvider ===> err', err);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider >
    );
};
