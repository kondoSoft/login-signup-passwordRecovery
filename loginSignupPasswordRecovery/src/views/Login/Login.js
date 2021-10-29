import React from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, CheckBox } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import { exportDefaultSpecifier } from "@babel/types"
const isIOS = Platform.OS === 'ios'

const Login = ({ navigation }) => {

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'space-around' }}>
            <View
                style={{}}
            >
                <Input
                    label='name user'
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
                    onPress={() => console.log('click')}
                />
                <Button
                    title='Log in'
                    onPress={() => console.log('click')}
                />
                <Button
                    title='sign up'
                    onPress={() => navigation.navigate('sign up')}
                />
                <Button
                    title='forgot password'
                    onPress={() => navigation.navigate('forgot password')}
                />
            </View>

        </SafeAreaView>

    )



}
export default Login