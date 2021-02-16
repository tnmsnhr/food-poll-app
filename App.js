import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import FoodappNavigator from './navigations/FoodappNavigation';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import foodReducer from './store/food-reducer';
import {init} from './helpers/db';

init().then(()=>{
  console.log("DB Initialized")
}).catch(err=>{
  console.log('Failed to initialized DB', err)
})

const rootReducer=combineReducers({
  food: foodReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fontFetch = ()=>{
  return Font.loadAsync({
    'nexa-bold':require('./assets/fonts/NexaBold.otf'),
    'nexa-light':require('./assets/fonts/NexaLight.otf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded]=useState(false)

  if( !fontLoaded){
    return <AppLoading startAsync={fontFetch} onFinish={()=>setFontLoaded(true)} onError={(err) => console.log(err)}/>
  }

  return <Provider store={store}><FoodappNavigator /></Provider>;
}