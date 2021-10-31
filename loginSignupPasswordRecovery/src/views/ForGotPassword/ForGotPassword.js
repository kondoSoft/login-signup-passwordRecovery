import React from "react"
import { Input, } from 'react-native-elements'
import { Button, View, SafeAreaView, Text } from 'react-native'
import Wrapper from "../../common/Wrapper"

const ForgotPassword = () => {

    return (
        <Wrapper>
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
        </Wrapper>
    )
}
export default ForgotPassword
