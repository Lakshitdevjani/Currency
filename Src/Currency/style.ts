/* eslint-disable quotes */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    marginBottom: 10,
  },
  picker: {
    color: '#000',
  },
  // picker: {
  //   marginBottom: 10,
  //   borderWidth: 1,
  //   borderColor: '#000',
  //   padding: 10,
  //   borderRadius: 15,
  //   color:'#000'
  // },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#272727',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});

export default styles;
