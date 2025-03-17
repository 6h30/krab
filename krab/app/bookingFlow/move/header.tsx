import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapIcon from "@/assets/svgs/bookingFlowSvgs/preBook/mapIcon.svg";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Transport</Text>

      <TouchableOpacity style={styles.headerRight}>
        <Text style={{ fontSize: 12, color: "#000" }}>Map</Text>

        {/* <Icon name="map" size={24} color="#000" /> */}
        <MapIcon width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFF",
    elevation: 2, // Bóng nhẹ cho Android
    shadowColor: "#000", // Bóng cho iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Màu chữ tối hơn cho rõ ràng
  },
  headerRight: {
    flexDirection: "row",
    borderWidth: 1,
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
