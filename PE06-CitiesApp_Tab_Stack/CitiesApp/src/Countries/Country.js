import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme';

export default class Country extends React.Component {
  state = {
    currencyName: '',
    currencyInfo: '',
    currencies: [],
  };

  handleAddCurrency = () => {
    const { currencyName, currencyInfo } = this.state;
    if (currencyName && currencyInfo) {
      this.setState((prevState) => ({
        currencies: [...prevState.currencies, { name: currencyName, info: currencyInfo }],
        currencyName: '',
        currencyInfo: '',
      }));
    }
  };

  render() {
    const { currencies, currencyName, currencyInfo } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {currencies.map((item, index) => (
          <View key={index} style={styles.currencyItem}>
            <Text style={styles.currencyName}>{item.name}</Text>
            <Text style={styles.currencyInfo}>{item.info}</Text>
          </View>
        ))}

        <TextInput
          placeholder="Currency name"
          value={currencyName}
          onChangeText={(text) => this.setState({ currencyName: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Currency info"
          value={currencyInfo}
          onChangeText={(text) => this.setState({ currencyInfo: text })}
          style={styles.input}
        />

        <TouchableOpacity onPress={this.handleAddCurrency} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Currency</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  currencyItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 8,
    marginBottom: 10,
  },
  currencyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyInfo: {
    fontSize: 14,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
