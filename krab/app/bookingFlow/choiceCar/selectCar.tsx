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
import { colors } from "@/theme/colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { commonStyles, pickScreenStyles } from "@/theme/styles";

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
  
  const handleCalendar = () => {
    router.push("/");
  }

  const handlePaymentMethod = () => {
    router.push("/bookingFlow/choiceCar/paymentMethod");
  }

  const handleOffers = () => {
    router.push("/bookingFlow/choiceCar/offers");
  }

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
              <View>
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

      <View style={styles.footer}>
        <View style={styles.container2}>
          <View style={styles.logoContainer2}>
            <HandMoney width={24} height={24} />
            <Text>Save 6.000đ on your ride when you join KrabUnlimited.</Text>
            <ArrowRight width={18} height={18} />
          </View>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={handlePaymentMethod}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
              }}
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <Text style={styles.logoText}>MoMo</Text>
          </TouchableOpacity>

          {/* Chữ Offers */}
          <TouchableOpacity
            style={styles.offersText}
            onPress={handleOffers}
          >
            <Text>Offers</Text>
          </TouchableOpacity>

          {/* Icon Menu (ba chấm) */}
          <TouchableOpacity>
            <MoreDot width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonleft}>
          <TouchableOpacity style={styles.calendarButton} onPress={handleCalendar}>
            <CalendarEdit width={36} height={36} />
          </TouchableOpacity>

          <ButtonF
            bgColor="#66E1FF"
            textColor="#000"
            onPress={handleLookingRider}
            title="Confirm Car and Look"
            size="secondary"
            radius="mini"
            containerStyles={{
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(135, 159, 249)",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginVertical: 8,
    marginHorizontal: 12,
    overflow: "hidden",
  },
  selectedRide: {
    borderColor: "rgb(74, 145, 226)",
    elevation: 8,
    shadowOpacity: 0.25,
  },
  blurContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  vehicleImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 12,
    elevation: 2,
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
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
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
    textDecorationLine: "line-through",
    marginRight: 6,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
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
    gap: 6,
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
  buttonleft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
    gap: 10,
  },
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e0e0e0",
    padding: 6,
  },
  footer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#bcbbc1",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default SelectCarScreen;
