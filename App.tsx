/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { useState, useEffect } from 'react' ;
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const limit:number = 50000000;

  const [sum, setSum] = useState(0);
  const [sumO, setSumO] = useState(0);
  


  const count = () => {
    let newSum = sum;
    for (let index = 0; index < limit; index++) {
      newSum += 1;
    }
    setSum(newSum);
  }

  const sumOne = () => {
    const suma:number = sumO + 1;
    console.debug(suma);
    setSumO(suma);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <Text>{ sum }</Text>
        <Button onPress={count}  title="sum"/>

        <Text>{ sumO }</Text>
        <Button onPress={sumOne} title="sum one"/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
