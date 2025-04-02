/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Style from './Style';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Currency' as never);
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={Style.container}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Welcome to the {'\n'} Currency Converter
      </Text>
    </View>
  );
};

export default WelcomeScreen;
