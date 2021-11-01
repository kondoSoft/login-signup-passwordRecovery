import React from "react"
import { Input, Text } from 'react-native-elements'
import { Button, View, } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Wrapper from "../../../common/Wrapper"

const SignUp = () => {
    const Schema = Yup.object().shape({
        user: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        PhoneNumber: Yup.string()
            .min(10, 'Too Short!')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .required('Required'),
        verifyPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    return (
        <Wrapper>
            <View style={{
                flex: 1,
            }} />
            <View
                style={{ flex: 3 }}
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
                            <Text>{errors.user}</Text>
                            <Input
                                label='Email'
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <Text>{errors.email}</Text>
                            <Input
                                label='Phone number'
                                onChangeText={handleChange('PhoneNumber')}
                                value={values.PhoneNumber}
                            />
                            <Text>{errors.PhoneNumber}</Text>
                            <Input
                                label='Password'
                                onChangeText={handleChange('password')}
                                value={values.password}
                            />
                            <Text>{errors.password}</Text>
                            <Input
                                label='Verify Password'
                                onChangeText={handleChange('verifyPassword')}
                                value={values.verifyPassword}

                            />
                            <Text>{errors.verifyPassword}</Text>
                            <Button
                                title='Sign up'
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </View>
        </Wrapper>
    )
}
export default SignUp
