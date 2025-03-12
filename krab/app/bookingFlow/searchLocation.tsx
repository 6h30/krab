import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import MapComponent from "@/components/MapComponent";

const SearchLocationScreen = () => {
  const router = useRouter();

  const handleChoiceCar = () => {
    router.push("/bookingFlow/choiceCar");
  };

  return (
    <View style={styles.container}>
      {/* Bản đồ */}
      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
      </View>

      {/* Form nhập liệu */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Find a trip</Text>

        <View style={styles.inputContainer}>
          <Icon name="map-marker" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Add a pick-up location" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="location-arrow" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Enter your destination" style={styles.input} />
        </View>

        {/* Nút bấm */}
        <TouchableOpacity style={styles.button} onPress={handleChoiceCar}>
          <Text style={styles.buttonText}>Choice Car</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchLocationScreen;
