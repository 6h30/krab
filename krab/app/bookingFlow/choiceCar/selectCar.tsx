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
import MoreDot from "@/assets/svgs/bookingFlowSvgs/preBook/moreDot.svg";
import ArrowRight from "@/assets/svgs/bookingFlowSvgs/preBook/arrowRight.svg";
import HandMoney from "@/assets/svgs/bookingFlowSvgs/preBook/handMoney.svg";
import InfoCircle from "@/assets/svgs/bookingFlowSvgs/preBook/infoCircle.svg";
import CalendarEdit from "@/assets/svgs/bookingFlowSvgs/preBook/calendarEdit.svg";

const SelectCarScreen = () => {
  const router = useRouter();

  const krabGoImage = require("@/assets/images/krab-go.png");
  const krabMotoImage = require("@/assets/images/krab-moto.png");
  const krabProImage = require("@/assets/images/krab-pro.png");
  const krabAutoImage = require("@/assets/images/krab-auto.png");

  const rideData = [
    {
      id: "1",
      carType: "Economic",
      seats: "4-seater car",
      estimatedTime: "Est. 3 mins away",
      price: "68.000đ",
      promoPercentage: 20,
      image: krabGoImage,
      iconData: <InfoCircle width={16} height={16} />,
    },
    {
      id: "2",
      carType: "Premium",
      seats: "4-seater car",
      estimatedTime: "Est. 5 mins away",
      price: "120.000đ",
      promoPercentage: 15,
      image: krabProImage,
    },
    {
      id: "3",
      carType: "Bike",
      seats: "1-seater bike",
      estimatedTime: "Est. 2 mins away",
      price: "25.000đ",
      // Không có khuyến mãi
      image: krabMotoImage,
    },
    {
      id: "4",
      carType: "SUV",
      seats: "7-seater car",
      estimatedTime: "Est. 4 mins away",
      price: "150.000đ",
      promoPercentage: 10,
      image: krabAutoImage,
    },
    {
      id: "5",
      carType: "More",
      seats: "",
      estimatedTime: "",
      price: "",
      promoPercentage: 0,
      image: { uri: "/" },
      iconData: <MoreDot width={16} height={16} />,
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
          {rideData.map((ride) => (
            <TouchableOpacity
              key={ride.id}
              onPress={() => handleSelectCar(ride.id)}
            >
              <View style={{ marginVertical: 0 }}>
                <KrabCarCard
                  carType={ride.carType}
                  seats={ride.seats}
                  estimatedTime={ride.estimatedTime}
                  price={ride.price}
                  promoPercentage={ride.promoPercentage}
                  image={ride.image}
                  InfoIcon={ride.iconData}
                  isSelected={ride.id === selectedCarId}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 14,
          borderColor: "#bcbbc1",
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.container2}>
          {/* Logo MoMo */}
          <View style={styles.logoContainer2}>
            <HandMoney width={24} height={24} />
            <Text style={{ marginLeft: 6 }}>
              Save 6.000đ on your ride when you join KrabUnlimited.
            </Text>
            <ArrowRight width={18} height={18} style={{ marginLeft: 6 }} />
          </View>
        </View>

        <View style={styles.container1}>
          {/* Logo MoMo */}
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
              }}
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <Text style={styles.logoText}>MoMo</Text>
          </View>

          {/* Chữ Offers */}
          <Text style={styles.offersText}>Offers</Text>

          {/* Icon Menu (ba chấm) */}
          <TouchableOpacity>
            <MoreDot width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            // paddingVertical: 16,
            backgroundColor: "#fff",
            gap: 10,
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 14, borderColor: "#e0e0e0", padding: 6 }}>
            <CalendarEdit width={36} height={36}  />
          </TouchableOpacity>

          <ButtonF
            // onPress={handleContinue}
            bgColor="#66E1FF"
            textColor="#000"
            onPress={handleLookingRider}
            title="Confirm Car and Look"
            size="secondary"
            radius="secondary"
            containerStyles={{
              marginVertical: 14,
              width: "80%",
              alignSelf: "center",
            }}
          ></ButtonF>
        </View>
      </View>
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
    // maxHeight: 300,
    position: "relative",
    marginBottom: 150,
    flexDirection: "column",
    backgroundColor: "#fff",

    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#bcbbc1",
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
    borderColor: "rgb(135, 159, 249)", // Reflective glass edge
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
    borderColor: "rgb(74, 145, 226)", // Blue tint for selection
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    gap: 10,
  },
  logoContainer: {
    flexDirection: "row",
    flex: 40,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  logoContainer2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#FFF9BF",
    borderRadius: 10,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  offersText: {
    fontSize: 16,
    color: "#555",
    flex: 20,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
  },
});

export default SelectCarScreen;
