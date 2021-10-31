import React from "react"
import { Input } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import Wrapper from "../../common/Wrapper"

const SingUp = () => {

    return (
            <Wrapper> 
                <View
                    style={{  }}
                >
                    <Input
                        label='name user'
                    />
                    <Input
                        label='name user'
                    />
                    <Input
                        label='name user'
                    />
                    <Input
                        label='name user'
                    />
                    <Input
                        label='Password'

                    />
                    <Button
                        title='Sign up'
                        onPress={() => console.log('click')}
                    />
                </View>
            </Wrapper>
    )
}
export default SingUp
