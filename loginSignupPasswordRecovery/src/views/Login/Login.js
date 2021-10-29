import React from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, CheckBox } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import { exportDefaultSpecifier } from "@babel/types"
const isIOS = Platform.OS === 'ios'

const Login = () => {

    return (

        <SafeAreaView style={{ flex: 1,justifyContent:'space-around' }}>
            <View
                style={{ }}
            >
                <Input
                    label='name user'
                />
                <Input
                    label='Password'

                />
                <Button
                    title='Log in'
                    onPress={() => console.log('click')}
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
                    title='sign up'
                    onPress={() => console.log('click')}
                />
            </View>

        </SafeAreaView>

    )



}
export default Login