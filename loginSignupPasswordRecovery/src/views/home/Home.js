import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import Wrapper from '../../common/Wrapper'

const Home = () => {
    return (
        <Wrapper>
            <View style = {{
                flex: 1
            }}>
                <Text h1>Home</Text>
            </View>
        </Wrapper>
    )
}

export default Home
