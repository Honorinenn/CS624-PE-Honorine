import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.prompt}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      <Text>CS 504 Software Engineering</Text>
      <Text>CS 506 Programming for Computing</Text>
      <Text>CS 519 Cloud Computing Overview</Text>
      <Text>CS 533 Computer Architecture</Text>
      <Text>CS 547 Secure Systems and Programs</Text>
      <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text>DS 510 Artificial Intelligence for Data Science</Text>
      <Text>DS 620 Machine Learning & Deep Learning</Text>

      <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
      <Text>CS 624 Full-Stack Development - Mobile App</Text>
      <Text>CS 628 Full-Stack Development - Web App</Text>

      <Text style={styles.sectionHeader}>Capstone (6 Credits)</Text>
      <Text>CS 698 Computer Science Capstone</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default CoreComponents;
