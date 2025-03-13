import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import MapComponent from "@/components/MapComponent";

const SearchLocationScreen = () => {
  const router = useRouter();

  const handleChoiceCar = () => {
    router.push("/bookingFlow/choiceCar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
        <Text style={styles.mapPlaceholder}>Map Placeholder</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Find a Trip</Text>
        <Text style={styles.subtitle}>Enter your pickup and destination</Text>

        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Icon name="map-marker" size={20} color="#666" style={styles.icon} />
            <TextInput 
              placeholder="Add a pick-up location" 
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="location-arrow" size={20} color="#666" style={styles.icon} />
            <TextInput 
              placeholder="Enter your destination" 
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleChoiceCar}
          >
            <Text style={styles.buttonText}>Choose Car</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    color: '#666',
    fontSize: 16,
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    minHeight: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inputSection: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SearchLocationScreen;