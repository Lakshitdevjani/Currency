/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import styles from './style';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get(
        'https://api.exchangerate-api.com/v4/latest/USD',
      );
      setCurrencyList(Object.keys(response.data.rates) as string[]);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch currencies');
    }
  };

  const convertCurrency = async () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Invalid Input', 'Please enter a valid number');
      return;
    }
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      );
      const rate = response.data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      Alert.alert('Error', 'Conversion failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={fromCurrency}
          onValueChange={setFromCurrency}
          style={styles.picker}
          dropdownIconColor="#000">
          {currencyList.map(currency => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={toCurrency}
          onValueChange={setToCurrency}
          style={styles.picker}
          dropdownIconColor="#000">
          {currencyList.map(currency => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity onPress={convertCurrency} style={styles.button}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFF',
          }}>
          Convert
        </Text>
      </TouchableOpacity>

      {convertedAmount && (
        <Text style={styles.result}>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </Text>
      )}
    </View>
  );
};

export default CurrencyConverter;
