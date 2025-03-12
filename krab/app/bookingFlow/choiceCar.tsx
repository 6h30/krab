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
import Button2 from '@/components/Button/index';

const ChoiceCarScreen = () => {
  const router = useRouter();

  const krabGoImage = require("@/assets/images/krab-go.png");
  const krabMotoImage = require("@/assets/images/krab-moto.png");
  const krabProImage = require("@/assets/images/krab-pro.png");
  const krabAutoImage = require("@/assets/images/krab-auto.png");

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
    router.push("/bookingFlow/lookingRider");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🗺 Bản đồ */}
      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
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
          // <TouchableOpacity
          //   key={option.id}
          //   style={[
          //     styles.rideOption,
          //     selectedCarId === option.id && styles.selectedRide, // 🎨 Thay đổi màu nếu xe được chọn
          //   ]}
          //   // onPress={() => handleSelectCar(option.id)}
          //   onPress={handleSelectCar.bind(null, option.id)}

          // >
          //   <Image style={styles.vehicleImage} source={option.image} />
          //   <View style={styles.rideDetails}>
          //     <View style={styles.headerRow}>
          //       <Text style={styles.rideTitle}>{option.title}</Text>
          //       <Text style={styles.rating}>{"★".repeat(option.rating)}</Text>
          //     </View>
          //     <Text style={styles.timeText}>{option.time}</Text>
          //     <Text style={styles.description}>{option.description}</Text>
          //   </View>
          //   <Text style={styles.price}>${option.price}</Text>
          // </TouchableOpacity>

          // <TouchableOpacity
          //   key={option.id}
          //   style={[
          //     styles.rideOption,
          //     selectedCarId === option.id && styles.selectedRide,
          //   ]}
          //   onPress={handleSelectCar.bind(null, option.id)}
          //   activeOpacity={0.7} // Adds subtle press feedback
          // >
          //   <Image style={styles.vehicleImage} source={option.image} />
          //   <View style={styles.rideDetails}>
          //     <View style={styles.headerRow}>
          //       <Text style={styles.rideTitle}>{option.title}</Text>
          //       <Text style={styles.rating}>{"★".repeat(option.rating)}</Text>
          //     </View>
          //     <Text style={styles.timeText}>{option.time}</Text>
          //     <Text style={styles.description}>{option.description}</Text>
          //   </View>
          //   <Text style={styles.price}>${option.price}</Text>
          // </TouchableOpacity>

          <TouchableOpacity
  key={option.id}
  style={[
    styles.rideOption,
    selectedCarId === option.id && styles.selectedRide,
  ]}
  onPress={handleSelectCar.bind(null, option.id)}
  activeOpacity={0.7}
>
  {/* Left Section: Image */}
  <Image style={styles.vehicleImage} source={option.image} />

  {/* Center Section: Details */}
  <View style={styles.rideDetails}>
    <View style={styles.headerRow}>
      <Text style={styles.rideTitle}>{option.title}</Text>
      <Text style={styles.rating}>{"★".repeat(option.rating)}</Text>
    </View>
    <View style={styles.infoRow}>
      <Text style={styles.timeText}>{option.time}</Text>
      <Text style={styles.price}>${option.price}</Text> {/* Move price here */}
    </View>
    <Text style={styles.description}>{option.description}</Text>
  </View>
</TouchableOpacity>

        ))}
      </ScrollView>

      {/* ✅ Nút xác nhận */}
      {/* <TouchableOpacity
        style={styles.continueButton}
        onPress={handleLookingRider}
      >
        <Text style={styles.buttonText}>
          {selectedCarId ? "Confirm Car and Look" : "Select a Car First"}
        </Text>
      </TouchableOpacity> */}

      <Button2
        // onPress={() => router.push("/bookingFlow/searchLocation")}
        onPress={handleLookingRider}
        containerStyles={{ marginVertical: 10 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Confrim</Text>
      </Button2>

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
    maxHeight: 300,
    flexDirection: 'column',

  },
  // rideOption: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#f5f7fa',
  //   borderRadius: 20,
  //   padding: 15,
  //   marginVertical: 8,
  //   // Single shadow configuration
  //   shadowColor: '#d1d5db',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 8,
  //   elevation: 5,
  //   // Use border for subtle depth
  //   borderWidth: 1,
  //   borderColor: 'rgba(255, 255, 255, 0.8)',
  // },
  // selectedRide: {
  //   backgroundColor: '#e5e9f0',
  //   borderWidth: 2,
  //   borderColor: '#dbe2ef',
  //   shadowOffset: { width: 4, height: 4 },
  //   shadowOpacity: 0.35,
  //   elevation: 6,
  // },
  // vehicleImage: {
  //   width: 70,
  //   height: 70,
  //   borderRadius: 15,
  //   marginRight: 15,
  //   backgroundColor: '#f5f7fa',
  //   padding: 5,
  // },
  // rideDetails: {
  //   flex: 1,
  //   backgroundColor: 'transparent',
  //   borderRadius: 12,
  //   padding: 8,
  // },
  // headerRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 4,
  // },
  // rideTitle: {
  //   fontSize: 18,
  //   fontWeight: '600',
  //   color: '#2d3748',
  //   letterSpacing: 0.2,
  // },
  // rating: {
  //   fontSize: 14,
  //   color: '#f6ad55',
  // },
  // timeText: {
  //   fontSize: 14,
  //   color: '#718096',
  //   marginBottom: 4,
  //   fontWeight: '500',
  // },
  // description: {
  //   fontSize: 12,
  //   color: '#718096',
  //   lineHeight: 16,
  // },
  // price: {
  //   fontSize: 18,
  //   fontWeight: '700',
  //   color: '#2d3748',
  //   marginLeft: 15,
  //   backgroundColor: '#e5e9f0',
  //   paddingHorizontal: 12,
  //   paddingVertical: 6,
  //   borderRadius: 12,
  //   shadowColor: '#d1d5db',
  //   shadowOffset: { width: 2, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  //   elevation: 2,
  // },

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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    borderRadius: 20,
    padding: 16, // Increased padding for breathing room
    marginVertical: 8,
    shadowColor: '#d1d5db',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  selectedRide: {
    backgroundColor: '#e5e9f0',
    borderWidth: 2,
    borderColor: '#dbe2ef',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.35,
    elevation: 6,
  },
  vehicleImage: {
    width: 60, // Slightly smaller for balance
    height: 60,
    borderRadius: 12,
    marginRight: 12, // Reduced margin for tighter layout
    backgroundColor: '#f5f7fa',
    padding: 4,
  },
  rideDetails: {
    flex: 1,
    paddingVertical: 4, // Vertical padding for internal spacing
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6, // More space before next row
  },
  rideTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
    letterSpacing: 0.2,
  },
  rating: {
    fontSize: 14,
    color: '#f6ad55',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6, // Space before description
  },
  timeText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  price: {
    fontSize: 24, // Slightly smaller to fit better
    fontWeight: '700',
    color: '#2d3748',
    backgroundColor: '#e5e9f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    shadowColor: '#d1d5db',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 12,
    color: '#718096',
    lineHeight: 16,
  },
});

export default ChoiceCarScreen;
