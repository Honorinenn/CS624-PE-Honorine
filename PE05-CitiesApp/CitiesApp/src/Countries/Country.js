import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Countries extends React.Component {
  render() {
    const { countries } = this.props;
    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { flex: 1, justifyContent: 'center' }]}>
          {!countries.length && <CenterMessage message="No countries saved!" />}
          {countries.map((item, index) => (
            <View key={`${item.name}-${index}`} style={styles.countryContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.currency}>Currency: {item.currency}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Countries;
