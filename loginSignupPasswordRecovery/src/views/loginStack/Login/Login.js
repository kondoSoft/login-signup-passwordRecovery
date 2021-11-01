import React from "react"
import { Input, CheckBox, Icon } from 'react-native-elements'
import { Button, View } from 'react-native'

import Wrapper from '../../../common/Wrapper'
import colors from '../../../../colors.json'

const Login = ({ navigation }) => {
    return (
        <Wrapper>
            <View style={{
                flex: 2,
            }}/>
            <View style={{
                flex: 3,
            }}>
                <Input
                    label='User Name'
                />
                <Input
                    label='Password'
                />
                <CheckBox
                    title='Remember email'
                    checkedIcon='circle'
                    uncheckedIcon='circle-thin'
                    checkedColor='blue'
                    uncheckedColor='gray'
                    textStyle={{ color: 'white', }}
                    checked={false}
                    containerStyle={{
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderWidth: 0
                    }}
                    onPress={() => console.log('click')}
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
                    onPress={() => console.log('click')}
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
        </Wrapper>
    )
}
export default Login