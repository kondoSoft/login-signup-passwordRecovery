import React from "react"
import { Input, Text } from 'react-native-elements'
import { Button, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Wrapper from "../../../common/Wrapper"

const ForgotPassword = () => {

    const Schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('please insert your email'),
    })

    return (
        <Wrapper>
            <View style={{
                flex: 2,
            }} />
            <View
                style={{ flex: 3, justifyContent: 'space-evenly' }}
            >
                <Formik
                    initialValues={{ user: '', email: '', PhoneNumber: '', password: '', }}
                    onSubmit={values => console.log(values)}
                    validationSchema={Schema}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <>
                            <Input
                                label='Email'
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <Text style={styles.textError}>{errors.email}</Text>
                            <Button
                                title='Log in'
                                onPress={handleSubmit}
                            />
                        </>
                    )}

                </Formik>
                <Text
                    style={{ textAlign: 'center' }}
                >
                    please check your email
                </Text>

            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    textError: {
        marginLeft: 10,
        marginBottom: 20
    }
})

export default ForgotPassword
