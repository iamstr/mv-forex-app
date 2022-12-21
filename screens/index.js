import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from "./LoginScreen"
import utilities from '../tailwind.json';
import {TailwindProvider} from 'tailwind-rn';
export default function LoginWrapper() {
  return (
   <TailwindProvider utilities={utilities}>
   <LoginScreen/>
    </TailwindProvider>  
  )
}