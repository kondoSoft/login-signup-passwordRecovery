import React from "react"
import { Input, Text } from 'react-native-elements'
import { Button, View, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Wrapper from "../../../common/Wrapper"

const isIOS = Platform.OS === 'ios'

const SignUp = () => {
    const Schema = Yup.object().shape({
        user: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        PhoneNumber: Yup.string()
            .matches(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, 'Phone is not in correct format')
            .required(),
        password: Yup.string()
            .min(6, 'Too Short!')
            .required('Required'),
        verifyPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    return (
        <Wrapper>
            <KeyboardAwareScrollView
                enableOnAndroid
                extraScrollHeight={isIOS ? 130 : -120}
                contentContainerStyle={{
                    borderWidth: 0,
                    borderColor: 'red',
                    flex:1,
                  }}
            >
                <View style={{
                    flex: 1,
                }} />
                <View
                    style={{ flex: 4 }}
                >
                    <Formik
                        initialValues={{ user: '', email: '', PhoneNumber: '', password: '', verifyPassword: '' }}
                        onSubmit={values => console.log(values)}
                        validationSchema={Schema}
                    >
                        {({ handleChange, handleSubmit, values, errors }) => (
                            <>
                                <Input
                                    label='User name'
                                    onChangeText={handleChange('user')}
                                    value={values.user}
                                />
                                <Text style={styles.textError}>{errors.user}</Text>
                                <Input
                                    label='Email'
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                                <Text style={styles.textError}>{errors.email}</Text>
                                <Input
                                    label='Phone number'
                                    onChangeText={handleChange('PhoneNumber')}
                                    value={values.PhoneNumber}
                                />
                                <Text style={styles.textError}>{errors.PhoneNumber}</Text>
                                <Input
                                    label='Password'
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                />
                                <Text style={styles.textError}>{errors.password}</Text>
                                <Input
                                    label='Verify Password'
                                    onChangeText={handleChange('verifyPassword')}
                                    value={values.verifyPassword}

                                />
                                <Text style={styles.textError}>{errors.verifyPassword}</Text>
                                <Button
                                    title='Sign up'
                                    onPress={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                </View>
            </KeyboardAwareScrollView>
        </Wrapper>
    )
}
const styles = StyleSheet.create({
    textError: {
        marginLeft: 10,
        marginBottom: 20
    }
})
export default SignUp
