import React from "react"
import { Input, CheckBox, Icon, Text } from 'react-native-elements'
import { Button, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Wrapper from '../../../common/Wrapper'
import colors from '../../../../colors.json'

const Login = ({ navigation }) => {
    const Schema = Yup.object().shape({
        user: Yup.string().required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .required('Required'),
    })
    return (
        <Wrapper>
            <View style={{
                flex: 2,
            }} />
            <View style={{
                flex: 3,
            }}>
                <Formik
                    initialValues={{ user: '', password: '', rememberMe: false }}
                    onSubmit={values => console.log(values)}
                    validationSchema={Schema}
                >
                    {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
                        <View>
                            <Input
                                label='User Name'
                                onChangeText={handleChange('user')}
                                value={values.user}
                            />
                            <Text style={styles.textError}>{errors.user}</Text>
                            <Input
                                label='Password'
                                onChangeText={handleChange('password')}
                                value={values.password}
                            />
                            <Text style={styles.textError} >{errors.password}</Text>
                            <CheckBox
                                name='rememberMe'
                                title='Remember email'
                                checkedIcon='circle'
                                uncheckedIcon='circle-thin'
                                checkedColor='blue'
                                uncheckedColor='gray'
                                textStyle={{ color: 'white', }}
                                checked={values.rememberMe}
                                containerStyle={{
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderWidth: 0
                                }}
                                onPress={() => setFieldValue('rememberMe', !values.rememberMe)}
                            />
                            <Icon
                                name='fingerprint'
                                size={40}
                                color={colors.MAINTEXT}
                                onPress={() => console.log('hello')}
                            />
                            <Button
                                title='Log in'
                                type="solid"
                                onPress={handleSubmit}
                            />
                            <Button
                                title='Sign Up'
                                type="solid"
                                onPress={() => navigation.navigate('sign up')}
                            />
                            <Button
                                title='Forgot Password'
                                type="solid"
                                onPress={() => navigation.navigate('forgot password')}
                            />
                        </View>
                    )}
                </Formik>

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

export default Login