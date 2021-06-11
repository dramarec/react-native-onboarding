/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register: async (email, password) => {
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
                    } catch (e) {
                        console.log(e);
                    }
                },
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
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
                        console.log(err);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
};
// import React, { createContext, useState } from 'react';
// import auth from '@react-native-firebase/auth';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 setUser,
//                 login: async (email, password) => {
//                     try {
//                         await auth().signInWithEmailAndPassword(
//                             email,
//                             password,
//                         );
//                     } catch (e) {
//                         console.log(e);
//                     }
//                 },
//                 register: async (email, password) => {
//                     try {
//                         await auth().createUserWithEmailAndPassword(
//                             email,
//                             password,
//                         );
//                     } catch (e) {
//                         console.log(e);
//                     }
//                 },
//                 logout: async () => {
//                     try {
//                         await auth().signOut();
//                     } catch (e) {
//                         console.log(e);
//                     }
//                 },
//             }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
