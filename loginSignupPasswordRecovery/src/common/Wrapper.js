import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Wrapper = ({children}) => (
  <LinearGradient colors={['#184274', '#021532']} style={{flex: 1}}>
    {children}
  </LinearGradient>
)

export default Wrapper
