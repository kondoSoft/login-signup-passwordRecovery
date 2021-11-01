import React from "react"
import { Input } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import Wrapper from "../../../common/Wrapper"

const SignUp = () => {

    return (
        <Wrapper>
            <View style={{
                flex: 1,
            }} />
            <View
                style={{flex: 3}}
            >
                <Input
                    label='User name'
                />
                <Input
                    label='Email'
                />
                <Input
                    label='Phone number'
                />
                <Input
                    label='Password'
                />
                <Input
                    label='Verify Password'

                />
                <Button
                    title='Sign up'
                    onPress={() => console.log('click')}
                />
            </View>
        </Wrapper>
    )
}
export default SignUp
