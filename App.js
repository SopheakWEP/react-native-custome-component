/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';



const App = () => {
  const [pressStatus, setPressStatus] = useState(true)
  const [buttonColor, setButtonColor] = useState('#eeb')
  const test = () => {
    const colorVal = buttonColor == '#eeb' ? '#abc' : '#eeb'
    setPressStatus(true)
    setButtonColor(colorVal)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{margin: 50, fontSize: 40}}>Custom Button</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={test}
            style={{
              backgroundColor: buttonColor,
              width: 250,
              height: 50,
              borderRadius: 5
            }}>
            <Text style={{textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
