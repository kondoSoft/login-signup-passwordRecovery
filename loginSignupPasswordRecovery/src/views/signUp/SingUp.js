import React from "react"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input } from 'react-native-elements'
import { Button, View, SafeAreaView } from 'react-native'
import { exportDefaultSpecifier } from "@babel/types"
const isIOS = Platform.OS === 'ios'

const SingUp = () => {

    return (
     
            <SafeAreaView style={{flex:1,}}> 
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

            </SafeAreaView>

    )



}
export default SingUp