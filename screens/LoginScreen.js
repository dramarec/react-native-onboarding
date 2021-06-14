/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

import { Formik } from 'formik';
import { loginValidationSchema } from '../utils/validation';

const LoginScreen = ({ navigation }) => {

    const { login, googleLogin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Social App</Text>

            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => login(values, actions)}
            >
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    isValid,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <>
                        <FormInput
                            name="email"
                            labelValue={values.email}
                            // onChangeText={userEmail => setEmail(userEmail)}
                            onChangeText={handleChange('email')}
                            placeholder="Email"
                            iconType="user"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        // onBlur={() => setFieldTouched('email')}
                        // onBlur={handleBlur('email')}

                        />
                        {touched.email && errors.email &&
                            <Text style={{ fontSize: 12, color: '#FF0D10', marginTop: -10, marginBottom: -3 }}>{errors.email}</Text>
                        }

                        <FormInput
                            name="password"
                            labelValue={values.password}
                            onChangeText={handleChange('password')}
                            placeholderText="Password"
                            iconType="lock"
                            onBlur={handleBlur('password')}
                        />

                        {touched.password && errors.password &&
                            <Text style={{ fontSize: 12, color: '#FF0D10', marginTop: -8, marginBottom: -7 }}>{errors.password}</Text>
                        }

                        <Text style={{ color: 'red' }}>{errors.general}</Text>
                        <FormButton
                            buttonTitle="Sign In"
                            // onPress={() => login(email, password)}
                            onPress={handleSubmit}
                            disabled={!isValid}

                        />
                    </>
                )}
            </Formik >


            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Sign Up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />

            <SocialButton
                buttonTitle="Sign Up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => { }}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});
