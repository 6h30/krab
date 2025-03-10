import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import MapComponent from "@/components/MapComponent";

const LookingForDriverScreen = () => {
  const router = useRouter();
  const krabGoImage = require("../assets/images/krab-go.png");

  const handleFindRider = () => {
    router.push("/riderDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.headerText}>Looking for nearby drivers</Text>

        {/* Map Component */}
        <View style={styles.mapContainer}>
          <MapComponent />
        </View>

        {/* Car Image */}
        <View style={styles.carContainer}>
          <Image style={styles.carImage} source={krabGoImage} />
        </View>

        {/* Pickup Location */}
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <View>
              <Text style={styles.locationText}>562/11-A</Text>
              <Text style={styles.locationDetails}>
                Kaikondrahalli, Bengaluru, Karnataka
              </Text>
            </View>
          </View>
        </View>

        {/* Drop-off Location */}
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <View>
              <Text style={styles.locationText}>Third Wave Coffee</Text>
              <Text style={styles.locationDetails}>
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </Text>
            </View>
          </View>
        </View>

        {/* Price and Payment Method */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>193.20</Text>
          <Text style={styles.paymentMethod}>Cash</Text>
        </View>
        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleFindRider}
        >
          <Text style={styles.continueButtonText}>Confirm rider</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  carContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  carImage: {
    width: 120,
    height: 120,
  },
  locationContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationDetails: {
    fontSize: 14,
    color: "#555",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentMethod: {
    fontSize: 16,
    color: "#555",
  },
  continueButton: {
    position: "absolute",
    bottom: 60,
    left: "10%",
    width: "80%",
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LookingForDriverScreen;