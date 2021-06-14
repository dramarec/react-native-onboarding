import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        // .matches(/\w*[a-z]\w*/, 'password must have a small letter')
        // .matches(/\w*[A-Z]\w*/, 'password must have a capital letter')
        // .matches(/\d/, 'password must have a number')
        // .matches(
        //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        //   'password must have a special character',
        // )
        .min(6, ({ min }) => `Password should be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref('password'), null],
            'Confirm Password must matched Password',
        )
        .required('Confirm Password is required'),
});

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        // .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    password: yup
        .string()
        // .label('Password')
        .min(6, ({ min }) => `Password should be at least ${min} characters`)
        .required('Password is required'),
});

//=============================================================================
//https://www.positronx.io/react-native-build-validate-forms-with-formik-yup/
// https://medium.com/react-native-mastery/build-react-native-fitness-app-6-firebase-email-authentication-integrate-formik-and-yup-cdedc8c161ac
//https://github.com/oblador/react-native-animatable
//! https://blog.crowdbotics.com/how-to-use-formik-and-context-api-build-crowdbotics-react-native-apps-with-firebase/
