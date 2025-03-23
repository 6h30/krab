import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";

import MapComponent from "@/components/MapComponent";
import ButtonF from "@/components/stylesFunny/ButtonF";
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";
import Cash from "@/assets/svgs/bookingFlowSvgs/coinCash.svg";

const LookingForDriverScreen = () => {
  const router = useRouter();
  const krabGoImage = require("@/assets/images/krab-go.png");

  const animationRef = useRef<LottieView>(null);
  const handleFindRider = () => {
    router.push("/bookingFlow/riderDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Looking for Drivers</Text>
          <Text style={styles.subtitle}>Searching for nearby drivers</Text>
        </View>
        <TouchableOpacity onPress={handleFindRider}>
          <LottieView
            ref={animationRef}
            source={require("@/assets/carRun.json")}
            autoPlay
            loop
            style={styles.carAnimation}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        {/* <MapComponent /> */}
        {/* <Text style={styles.mapPlaceholder}>Map Placeholder</Text> */}
      </View>

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.carContainer}>
          <Image source={krabGoImage} style={styles.carImage} />
          <Text style={styles.waitingText}>Please wait a moment...</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.locationCard}>
            <HomePoint width={24} height={24} style={styles.locationIcon} />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>487/47</Text>
              <Text style={styles.locationSubtitle}>
                Vo Thi Nho street, District 7, HCM city
              </Text>
            </View>
          </View>

          <View style={styles.locationCard}>
            <PickPoint width={24} height={24} style={styles.locationIcon} />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Soul 22 Coffee</Text>
              <Text style={styles.locationSubtitle}>
                Vo Thi Nho street, District 1, HCM city
              </Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>20.000đ</Text>
            <Cash width={30} height={30} />
          </View>

          {/* <ButtonF
            bgColor="#58d8e5"
            onPress={handleFindRider}
            title="Booking"
            containerStyles={styles.buttonContainer}
          /> */}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  mapContainer: {
    height: 250,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  carContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  carImage: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  carAnimation: {
    width: 60,
    height: 60,
    marginRight: 12,
    // borderWidth: 1,
  },
  waitingText: {
    fontSize: 16,
    color: "#666",
  },
  infoContainer: {
    paddingBottom: 32,
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bcbbc1",
  },
  locationIcon: {
    marginRight: 12,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  locationSubtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#bcbbc1",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default LookingForDriverScreen;
