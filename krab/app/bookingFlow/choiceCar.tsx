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
import Button2 from "@/components/Button/index";
import CardComponent from "@/components/card";
import { BlurView } from 'expo-blur';
import ButtonF from "@/components/stylesFunny/ButtonF";

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
      originalPrice: "200.00",
      price: "193.20",
      description: "Affordable, compact rides",
      image: krabGoImage,
    },
    {
      id: "2",
      title: "Moto",
      rating: 1,
      time: "3 mins away",
      originalPrice: "70.00",
      price: "65.17",
      description: "Affordable motorcycle rides",
      image: krabMotoImage,
    },
    {
      id: "3",
      title: "Premier",
      rating: 4,
      time: "4 mins away",
      originalPrice: "200.00",
      price: "193.20",
      description: "Comfortable sedans, top-quality drivers",
      image: krabProImage,
    },
    {
      id: "4",
      title: "UberAuto",
      rating: 3,
      time: "2 mins away",
      originalPrice: "120.00",
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
        
      {/* <CardComponent
        title="Card"
        description="Mobile & web design references. Built with the latest Figma and Framer features, the meticulously crafted, fully customisable components will turbocharge your design workflow, ensuring seamless consistency and efficiency in all your projects."
        creator="Jiho Lim, Creator of Mobbin"
      /> */}

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
            selectedCarId === option.id && styles.selectedRide,
          ]}
          onPress={handleSelectCar.bind(null, option.id)}
          activeOpacity={0.7}
        >
          <BlurView
            style={styles.blurContainer}
            tint="light" // Options: 'light', 'default', 'dark'
            intensity={80} // Blur intensity (0-100)
          >
            {/* Left Section: Image */}
            <Image style={styles.vehicleImage} source={option.image} />
    
            {/* Right Section: Details */}
            <View style={styles.rideDetails}>
              <View style={styles.infoRow}>
                 <Text style={styles.rideTitle}>{option.title}</Text>
                 <Text style={styles.originalPrice}>${option.originalPrice}</Text>
              </View>
                          
              <View style={styles.infoRow}>
                <Text style={styles.timeText}>{option.time}</Text>
                <View style={styles.priceContainer}>                 
                  <Text style={styles.price}>${option.price}</Text>
                </View>
              </View>
            </View>
          </BlurView>
        </TouchableOpacity>
        ))}
      </ScrollView>

      {/* <Button2
        // onPress={() => router.push("/bookingFlow/searchLocation")}
        onPress={handleLookingRider}
        containerStyles={{ marginVertical: 10 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Confrim
        {selectedCarId ? "Confirm Car and Look" : "Select a Car First"}
        </Text>
      </Button2> */}

      <ButtonF
          // onPress={handleContinue}
          bgColor="#58d8e5"
          onPress={handleLookingRider}
          title='Confirm Car and Look'
          containerStyles={{ marginVertical: 30 }}
        >         
        </ButtonF>
    </SafeAreaView>
  );
};

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
    borderColor: 'rgba(255, 255, 255, 0.18)', // Reflective glass edge
    elevation: 6, // Clay-like shadow (Android)
    shadowColor: '#000', // Multi-layered shadow (iOS)
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginVertical: 8,
    marginHorizontal: 12,
    overflow: 'hidden', // Ensure blur doesn’t bleed outside
  },
  selectedRide: {
    // Highlighted state
    borderColor: 'rgba(74, 144, 226, 0.5)', // Blue tint for selection
    elevation: 8,
    shadowOpacity: 0.25,
  },
  blurContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12, // Balanced padding inside blur
    borderRadius: 16, // Match outer radius
    overflow: 'hidden', // Clip content to rounded corners
  },
  vehicleImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 12,
    elevation: 2, // Subtle clay shadow
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  rideDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: '600', // Soft bold
    color: '#333333',
    marginBottom: 6, // Space between title and info
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#666666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: '#888888',
    textDecorationLine: 'line-through', // Strikethrough effect
    marginRight: 6, // Space between original and current price
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2', // Blue for emphasis
  },
});

export default ChoiceCarScreen;
