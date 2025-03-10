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
import MapComponent from "@/components/MapComponent";

const ChoiceCarScreen = () => {
  const router = useRouter();

  const krabGoImage = require("../assets/images/krab-go.png");
  const krabMotoImage = require("../assets/images/krab-moto.png");
  const krabProImage = require("../assets/images/krab-pro.png");
  const krabAutoImage = require("../assets/images/krab-auto.png");

  const rideOptions = [
    {
      id: "1",
      title: "UberGo",
      rating: 4,
      time: "2 mins away",
      price: "193.20",
      description: "Affordable, compact rides",
      image: krabGoImage,
    },
    {
      id: "2",
      title: "Moto",
      rating: 1,
      time: "3 mins away",
      price: "65.17",
      description: "Affordable motorcycle rides",
      image: krabMotoImage,
    },
    {
      id: "3",
      title: "Premier",
      rating: 4,
      time: "4 mins away",
      price: "193.20",
      description: "Comfortable sedans, top-quality drivers",
      image: krabProImage,
    },
    {
      id: "4",
      title: "UberAuto",
      rating: 3,
      time: "2 mins away",
      price: "118.21",
      description: "Affordable auto rides",
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
    router.push("/lookingRider");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🗺 Bản đồ */}
      <View style={styles.mapContainer}>
        <MapComponent />
      </View>

      {/* 📌 Nút "Leave Now" */}
      <TouchableOpacity style={styles.leaveNowButton}>
        <Text style={styles.leaveNowText}>Leave Now</Text>
      </TouchableOpacity>

      {/* 🚖 Danh sách xe */}
      <ScrollView
        style={styles.rideList}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        {rideOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.rideOption,
              selectedCarId === option.id && styles.selectedRide, // 🎨 Thay đổi màu nếu xe được chọn
            ]}
            onPress={() => handleSelectCar(option.id)}
          >
            <Image style={styles.vehicleImage} source={option.image} />
            <View style={styles.rideDetails}>
              <View style={styles.headerRow}>
                <Text style={styles.rideTitle}>{option.title}</Text>
                <Text style={styles.rating}>{"★".repeat(option.rating)}</Text>
              </View>
              <Text style={styles.timeText}>{option.time}</Text>
              <Text style={styles.description}>{option.description}</Text>
            </View>
            <Text style={styles.price}>${option.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* ✅ Nút xác nhận */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleLookingRider}
      >
        <Text style={styles.buttonText}>
          {selectedCarId ? "Confirm Car and Look" : "Select a Car First"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// 🎨 **StyleSheet tối ưu**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    height: 200, // 📏 Giảm chiều cao bản đồ để tối ưu không gian
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
    maxHeight: 300, // 📏 Giới hạn chiều cao danh sách để tránh che nút
  },
  rideOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff", // 🚗 Màu nền mặc định
  },
  selectedRide: {
    backgroundColor: "#D0F0C0", // ✅ Màu xanh nhẹ cho xe được chọn
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  vehicleImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  rideDetails: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rideTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    color: "#FFD700",
  },
  timeText: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
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
});

export default ChoiceCarScreen;
