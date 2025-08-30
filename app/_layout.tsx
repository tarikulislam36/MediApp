import { Provider } from "react-redux"
import store from "./store"
import Navigation from "./Navigation"

export default function _layout() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}





























// import { View, Text } from 'react-native'
// import React from 'react'
// import { Stack } from 'expo-router'
// import './global.css'
// import Login from './Login'

// const _layout = () => {
//   return (

//     <Login />

//     //  <Stack>
//     //   <Stack.Screen
//     //     name="(tabs)"
//     //     options={
//     //       { headerShown: false }
//     //     }

//     //   />

//     // </Stack>


//   )
// }

// export default _layout