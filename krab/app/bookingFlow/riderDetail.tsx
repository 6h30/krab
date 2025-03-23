import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import Safety from "@/assets/svgs/bookingFlowSvgs/shield.svg";
import Share from "@/assets/svgs/bookingFlowSvgs/share.svg";
import Call from "@/assets/svgs/bookingFlowSvgs/phoneCall.svg";
import ButtonF from "@/components/stylesFunny/ButtonF";

// Constants
const driver_avt = require("@/assets/images/krab-go.png");

const RideDetailScreen = () => {
  const router = useRouter();

  const handleSafety = () => {
    // Logic for safety feature
    console.log("Safety clicked");
  };

  const handleShareTrip = () => {
    router.push("/bookingFlow/shareT");
  };

  const handleCallDriver = () => {
    router.push("/bookingFlow/callS");
  };

  const handleMessage = () => {
    router.push("/bookingFlow/chatS");
  };

  const handleRateDriver = () => {
    router.push("/bookingFlow/rateDriver");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Meet Your Driver</Text>
          <Text style={styles.subtitle}>
            At the pickup point in{" "}
            <Text style={styles.timeHighlight}>2 min</Text>
          </Text>
        </View>

        <View style={styles.mapContainer}>{/* <MapComponent /> */}</View>

        <View style={styles.contentContainer}>
          <View style={styles.driverInfo}>
            <Image style={styles.driverImage} source={driver_avt} />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>51L-12345</Text>
              <Text style={styles.driverFullName}>4 seats</Text>
              <Text style={styles.carInfo}>White Suzuki S-Presso XL</Text>
              <Text style={styles.rating}>4.9 ★</Text>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              <HomePoint style={styles.locationIcon} width={28} height={28} />
              <View>
                <Text style={styles.locationText}>487/47</Text>
                <Text style={styles.locationDetails}>
                  Vo Thi Nho street, District 7, HCM city
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              // onPress={handleSafety}
              onPress={handleRateDriver}
            >
              <Safety style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleShareTrip}
            >
              <Share style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleCallDriver}
            >
              <Call style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Call</Text>
            </TouchableOpacity>
          </View>

          <ButtonF
            bgColor="#66E1FF"
            textColor="#000"
            onPress={handleMessage}
            title="Send a message..."
            size="secondary"
            radius="secondary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const colors = {
  white: "#fff", // Màu nền chính
  lightGray: "#f0f0f0", // Màu nền map
  borderGray: "#bcbbc1", // Màu viền
  textDark: "#1A1A1A", // Màu tiêu đề chính
  textPrimary: "#333", // Màu chữ chính
  textGray: "#666", // Màu chữ phụ
  highlightBlue: "#007AFF", // Màu nổi bật (time, button text)
  lightBlue: "#f1f1f1", // Màu nền cho các container
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // padding: 20,
  },
  scrollContainer: {
    flex: 1,
    padding: 15,
  },
  mapContainer: {
    // height: 250,
    flex: 1,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: colors.lightGray,
    // marginBottom: 14,
  },
  header: {
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: 4,
  },
  timeHighlight: {
    fontWeight: "bold",
    color: colors.highlightBlue,
  },
  contentContainer: {
    // flex: 1,
    paddingTop: 14,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    padding: 12,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.borderGray,
    backgroundColor: colors.white,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  driverFullName: {
    fontSize: 16,
    color: colors.textGray,
    marginTop: 2,
  },
  carInfo: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "600",
    marginTop: 4,
  },
  locationContainer: {
    marginBottom: 14,
    padding: 8,
    backgroundColor: colors.lightBlue,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderGray,
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
    color: colors.textPrimary,
  },
  locationDetails: {
    fontSize: 14,
    color: colors.textGray,
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  actionButton: {
    flexDirection: "row",
    width: "30%",
    backgroundColor: colors.lightBlue,
    paddingVertical: 8,
    borderRadius: 14,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  actionButtonText: {
    fontSize: 14,
    color: colors.highlightBlue,
    marginTop: 6,
  },
});

export default RideDetailScreen;
