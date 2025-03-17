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
import ButtonF from "@/components/stylesFunny/ButtonF";
import { SvgProps } from "react-native-svg";

import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";
import Cash from "@/assets/svgs/bookingFlowSvgs/coinCash.svg";

const LookingForDriverScreen = () => {
  const router = useRouter();
  const krabGoImage = require("@/assets/images/krab-go.png");

  const handleFindRider = () => {
    router.push("/bookingFlow/riderDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Looking for Drivers</Text>
          <Text style={styles.subtitle}>Searching for nearby drivers</Text>
        </View>

        <View style={styles.mapContainer}>
          {/* <MapComponent /> */}
          <Text style={styles.mapPlaceholder}>Map Placeholder</Text>
        </View>

        <View style={styles.content}>
          {/* <View style={styles.carContainer}>
            <Image style={styles.carImage} source={krabGoImage} />
          </View> */}

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              {/* <Text style={styles.locationIcon}>📍</Text> */}
              <HomePoint style={styles.locationIcon} width={28} height={28} />

              <View>
                <Text style={styles.locationText}>487/47</Text>
                <Text style={styles.locationDetails}>
                  Vo Thi Nho street, District 7, HCM city
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              <PickPoint style={styles.locationIcon} width={28} height={28} />

              <View>
                <Text style={styles.locationText}>Soul 22 Coffee</Text>
                <Text style={styles.locationDetails}>
                  Vo Thi Nho street, District 1, HCM city
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>$193.20</Text>
            {/* <Text style={styles.paymentMethod}>Cash</Text> */}
            <Cash style={styles.locationIcon} width={28} height={28} />
          </View>

          {/* <TouchableOpacity
            style={styles.continueButton}
            onPress={handleFindRider}
          >
            <Text style={styles.continueButtonText}>Confirm Rider</Text>
          </TouchableOpacity> */}

          <ButtonF
            bgColor="#58d8e5"
            onPress={handleFindRider}
            title="Booking"
            containerStyles={{ marginVertical: 30 }}
          ></ButtonF>
        </View>
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
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  mapPlaceholder: {
    color: "#666",
    fontSize: 16,
  },
  content: {
    flex: 1,
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
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderWidth: 1,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  locationDetails: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  paymentMethod: {
    fontSize: 16,
    color: "#666",
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LookingForDriverScreen;
