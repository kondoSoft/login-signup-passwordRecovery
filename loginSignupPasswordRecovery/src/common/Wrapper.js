import React from 'react'
import {View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wrapper = ({children}) => (
  <LinearGradient colors={['#184274', '#021532']} style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
      {children}
    </SafeAreaView>
  </LinearGradient>
)

export default Wrapper
