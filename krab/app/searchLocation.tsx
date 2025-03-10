import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const SearchLocationScreen = () => {
  const router = useRouter();

  const handleChoiceCar = () => {
    // Add your logic here for handling the continue action
    router.push('/choiceCar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Uber</Text>
      <Text style={styles.subHeader}>RANASINOPETE</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AVRoad</Text>
        <Text style={styles.sectionContent}>Kristina Rajendra Market</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KALASPALYA</Text>
        <Text style={styles.sectionContent}>Kevin Hosnitski Research Centre</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OV-PURAM</Text>
        <Text style={styles.sectionContent}>National College</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Segar Chandramma</Text>
        <Text style={styles.sectionContent}>Map Data 2022 Google</Text>
        <Text style={styles.sectionContent}>Terms of Use</Text>
      </View>

      <View style={styles.tripSection}>
        <Text style={styles.tripTitle}>Find a trip</Text>
        <TextInput style={styles.input} placeholder="Add a pick-up location" />
        <TextInput style={styles.input} placeholder="Enter your destination" />
      </View>

      <Button title="Leave Now" onPress={handleChoiceCar} />

      <TouchableOpacity style={styles.continueButton} onPress={handleChoiceCar}>
        <Text style={styles.button}>
          find rider
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 14,
  },
  tripSection: {
    marginBottom: 16,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },

  button: {
    fontSize: 20,
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
});

export default SearchLocationScreen;