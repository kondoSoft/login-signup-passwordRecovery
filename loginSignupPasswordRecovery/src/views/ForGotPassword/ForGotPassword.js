import React from "react"
import { Input, Text } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import Wrapper from "../../common/Wrapper"

const ForgotPassword = () => {

    return (
        <Wrapper>
            <View style={{
                flex: 2,
            }} />
            <View
                style={{ flex: 3, justifyContent: 'space-evenly' }}
            >
                <Text
                 style={{paddingLeft:10}}
                >please insert your email</Text>
                <Input
                    label='Password'
                />
                <Button
                    title='Log in'
                    onPress={() => console.log('click')}
                />
                <Text
                    style={{ textAlign: 'center' }}
                >please check your email </Text>
            </View>
        </Wrapper>
    )
}
export default ForgotPassword
