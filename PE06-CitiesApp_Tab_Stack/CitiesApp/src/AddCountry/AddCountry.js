import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default class AddCountry extends React.Component {
  state = {
    country: '',
    currency: '',
  };

  onSubmit = () => {
    const { country, currency } = this.state;
    if (country && currency) {
      this.props.addCountry({ country, currency });
      this.setState({ country: '', currency: '' });
      this.props.navigation.navigate('Countries'); // optional redirect
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Country name"
          value={this.state.country}
          onChangeText={(text) => this.setState({ country: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Currency"
          value={this.state.currency}
          onChangeText={(text) => this.setState({ currency: text })}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
