import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import ButtonF from "@/components/stylesFunny/ButtonF";
import KrabCarCard from "@/components/stylesFunny/KrabCar";

const SelectCarScreen = () => {
  const router = useRouter();

  const krabGoImage = require("@/assets/images/krab-go.png");
  const krabMotoImage = require("@/assets/images/krab-moto.png");
  const krabProImage = require("@/assets/images/krab-pro.png");
  const krabAutoImage = require("@/assets/images/krab-auto.png");

  const rideData = [
    {
      carType: "Economic",
      seats: "4-seater car",
      estimatedTime: "Est. 3 mins away",
      price: "68.000đ",
      promoPercentage: 20,
      image: krabGoImage,
    },
    {
      carType: "Premium",
      seats: "4-seater car",
      estimatedTime: "Est. 5 mins away",
      price: "120.000đ",
      promoPercentage: 15,
      image: krabProImage,
    },
    {
      carType: "Bike",
      seats: "1-seater bike",
      estimatedTime: "Est. 2 mins away",
      price: "25.000đ",
      // Không có khuyến mãi
      image: krabMotoImage,
    },
    {
      carType: "SUV",
      seats: "7-seater car",
      estimatedTime: "Est. 4 mins away",
      price: "150.000đ",
      promoPercentage: 10,
      image: krabAutoImage,
    },
  ];

  const [selectedCarId, setSelectedCarId] = React.useState<string | null>(null);

  const handleSelectCar = (id: string) => {
    setSelectedCarId(id); // Lưu xe được chọn
  };

  const handleLookingRider = () => {
    if (!selectedCarId) {
      alert("Please select a car first!");
      return;
    }
    router.push("/bookingFlow/lookingRider");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🗺 Bản đồ */}
      <View style={styles.mapContainer}>{/* <MapComponent /> */}</View>

      {/* 🚗 Danh sách các loại xe */}
      <ScrollView
        style={styles.rideList}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View>
          {rideData.map((ride, index) => (
            <View key={index} style={{ marginVertical: 0 }}>
              <KrabCarCard
                carType={ride.carType}
                seats={ride.seats}
                estimatedTime={ride.estimatedTime}
                price={ride.price}
                promoPercentage={ride.promoPercentage}
                image={ride.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.container1}>
      {/* Logo MoMo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>MoMo</Text>
      </View>

      {/* Chữ Offers */}
      <Text style={styles.offersText}>Offers</Text>

      {/* Icon Menu (ba chấm) */}
      <TouchableOpacity>
        {/* <Icon name="more-vert" size={24} color="#000" /> */}
      </TouchableOpacity>
    </View>
      <ButtonF
        // onPress={handleContinue}
        bgColor="#58d8e5"
        onPress={handleLookingRider}
        title="Confirm Car and Look"
        containerStyles={{ marginVertical: 30 }}
      ></ButtonF>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    height: 200,
  },
  leaveNowButton: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
  },
  leaveNowText: {
    fontSize: 16,
    color: "#000",
  },
  rideList: {
    maxHeight: 300,
    flexDirection: "column",
    backgroundColor: "#eee",
  },

  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  rideOption: {
    // Claymorphism outer style (shadows and border)
    borderRadius: 16, // Soft, clay-like corners
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)", // Reflective glass edge
    elevation: 6, // Clay-like shadow (Android)
    shadowColor: "#000", // Multi-layered shadow (iOS)
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginVertical: 8,
    marginHorizontal: 12,
    overflow: "hidden", // Ensure blur doesn’t bleed outside
  },
  selectedRide: {
    // Highlighted state
    borderColor: "rgba(74, 144, 226, 0.5)", // Blue tint for selection
    elevation: 8,
    shadowOpacity: 0.25,
  },
  blurContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12, // Balanced padding inside blur
    borderRadius: 16, // Match outer radius
    overflow: "hidden", // Clip content to rounded corners
  },
  vehicleImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 12,
    elevation: 2, // Subtle clay shadow
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  rideDetails: {
    flex: 1,
    justifyContent: "center",
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: "600", // Soft bold
    color: "#333333",
    marginBottom: 6, // Space between title and info
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 14,
    color: "#666666",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888888",
    textDecorationLine: "line-through", // Strikethrough effect
    marginRight: 6, // Space between original and current price
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2", // Blue for emphasis
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D81B60', // Màu hồng đậm của MoMo
  },
  offersText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SelectCarScreen;
