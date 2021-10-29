import React from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, } from 'react-native-elements'
import { Button, View, SafeAreaView, Text } from 'react-native'
import { exportDefaultSpecifier } from "@babel/types"
const isIOS = Platform.OS === 'ios'

const ForGotPassword = () => {

    return (

        <SafeAreaView style={{ flex: 1,justifyContent:'space-around' }}>
            <View
                style={{ }}
            >
                <Text>please insert your email</Text>
                
                <Input
                    label='Password'

                />
                <Button
                    title='Log in'
                    onPress={() => console.log('click')}
                />
                <Text>please check your email </Text>
            </View>

        </SafeAreaView>

    )



}
export default ForGotPassword